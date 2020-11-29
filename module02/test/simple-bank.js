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
		assert.equal(0, await bank.balance({from: accounts[1]}), "bank account balance is not zero after it was just created");

		// verify it is impossible to create same account again
		await expectThrow(bank.open({from: accounts[1]}), "able to create same bank account again");
	});

	it("deposit", async() => {
		// deploy SimpleBank smart contract into network
		const bank = await SimpleBankContract.new();

		// verify it is impossible to deposit into non-existing account
		await expectThrow(bank.deposit({from: accounts[1], value: 1}), "able to deposit 1 wei into non-existent account");

		// open account 1 – for accounts[1]
		await bank.open({from: accounts[1]});

		// deposit 1 wei into account 1
		await bank.deposit({from: accounts[1], value: 1});

		// verify 1 wei deposited successfully
		assert.equal(1, await bank.balance({from: accounts[1]}), "bank account balance is not 1 wei after depositing 1 wei");

		// verify it is impossible to deposit zero value
		await expectThrow(bank.deposit({from: accounts[1]}), "able to deposit zero value");
	});
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
