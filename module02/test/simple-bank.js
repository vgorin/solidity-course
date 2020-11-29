// link to SimpleBank smart contract
const SimpleBankContract = artifacts.require("./SimpleBank.sol");

contract("SimpleBank.sol", (accounts) => {
	it("open", async() => {
		// deploy SimpleBank smart contract into network
		const bank = await SimpleBankContract.new();

		// open account 1 – for accounts[1]
		await bank.open({from: accounts[1]});

		// verify account 1 exists
		assert(await bank.exists({from: accounts[1]}), "bank account doesn't exist after it was created");

		// verify account 1 balance is zero
		assert.equal(
			0,
			await bank.balance({from: accounts[1]}),
			"bank account balance is not zero after it was just created"
		);

		// verify it is impossible to create same account again
		await expectThrow(bank.open({from: accounts[1]}), "able to create same bank account again");
	});

	it("deposit", async() => {
		// deploy SimpleBank smart contract into network
		const bank = await SimpleBankContract.new();

		// verify it is impossible to deposit into non-existing account
		await expectThrow(
			bank.deposit({from: accounts[1], value: 1}),
			"able to deposit 1 wei into non-existent bank account"
		);

		// open account 1 – for accounts[1]
		await bank.open({from: accounts[1]});

		// deposit some wei into account 1
		const value = Math.round(1 + Math.random() * 100);
		await bank.deposit({from: accounts[1], value: value});

		// verify some wei deposited successfully
		assert.equal(
			value,
			await bank.balance({from: accounts[1]}),
			"bank account balance is not " + value + " wei after depositing " + value + " wei"
		);

		// TODO: verify smart contract ETH balance increased
		// TODO: verify account 1 ETH balance decreased

		// verify it is impossible to deposit zero value
		await expectThrow(bank.deposit({from: accounts[1]}), "able to deposit zero value");
	});

	it("transfer", async() => {
		// deploy SimpleBank smart contract into network
		const bank = await SimpleBankContract.new();

		// open account 1 – for accounts[1]
		await bank.open({from: accounts[1]});

		// deposit some wei into account 1
		const value = Math.round(1 + Math.random() * 100);
		await bank.deposit({from: accounts[1], value: value});

		// verify it is impossible to transfer into non-existent account
		await expectThrow(
			bank.transfer(accounts[2], {from: accounts[1]}),
			"able to transfer to non-existent account"
		);

		// open account 2 – for accounts[2]
		await bank.open({from: accounts[2]});

		// verify it is impossible to transfer from zero balance account
		await expectThrow(
			bank.transfer(accounts[1], {from: accounts[2]}),
			"able to transfer from an empty or non-existent bank account"
		);

		// transfer from account 1 to account 2
		await bank.transfer(accounts[2], {from: accounts[1]});

		// verify value was transferred correctly
		assert.equal(0, await bank.balance({from: accounts[1]}), "non-zero bank account balance after transferring from it");
		assert.equal(
			value,
			await bank.balance({from: accounts[2]}),
			"incorrect bank account balance after transferring " + value + " wei into it"
		);

		// TODO: verify smart contract ETH balance didn't change
		// TODO: verify account 1 and 2 ETH balances didn't change
	});

	it("withdraw", async() => {
		// deploy SimpleBank smart contract into network
		const bank = await SimpleBankContract.new();

		// open account 1 – for accounts[1]
		await bank.open({from: accounts[1]});

		// verify it is impossible to withdraw from an empty account
		await expectThrow(
			bank.withdraw({from: accounts[1]}),
			"able to withdraw from an empty or non-existent bank account"
		);

		// deposit some wei into account 1
		const value = Math.round(1 + Math.random() * 100);
		await bank.deposit({from: accounts[1], value: value});

		// withdraw from an account 1
		await bank.withdraw({from: accounts[1]});

		// TODO: verify smart contract ETH balance decreased
		// TODO: verify account 1 ETH balance increased
	});

	it("close", async() => {
		// deploy SimpleBank smart contract into network
		const bank = await SimpleBankContract.new();

		// verify it is impossible to close non-existent account
		await expectThrow(bank.close({from: accounts[1]}), "able to close non-existent bank account");

		// open account 1 – for accounts[1]
		await bank.open({from: accounts[1]});

		// close account 1
		await bank.close({from: accounts[1]});

		// verify account 1 is closed
		assert(!await bank.exists({from: accounts[1]}), "bank account still exists after closing it");

		// open account 1 again
		await bank.open({from: accounts[1]});

		// deposit some value into account 1
		const value = Math.round(1 + Math.random() * 100);
		await bank.deposit({from: accounts[1], value: value});

		// verify it impossible to close non-empty account
		await expectThrow(bank.close({from: accounts[1]}), "able to close non-empty bank account");
	})
});


// auxiliary function to ensure function throws
// taken from OpenZeppelin expectThrow script
async function expectThrow(promise, msg) {
	try {
		await promise;
	}
	catch (error) {
		// TODO: Check jump destination to distinguish between a throw
		//       and an actual invalid jump.
		const invalidOpcode = error.message.search('invalid opcode') >= 0;
		// TODO: When we contract A calls contract B, and B throws, instead
		//       of an 'invalid jump', we get an 'out of gas' error. How do
		//       we distinguish this from an actual out of gas event? (The
		//       ganache log actually show an 'invalid jump' event.)
		const outOfGas = error.message.search('out of gas') >= 0;
		const revert = error.message.search('revert') >= 0;
		assert(
			invalidOpcode || outOfGas || revert,
			'Expected throw, got \'' + error + '\' instead',
		);
		return;
	}
	assert.fail(msg);
}
