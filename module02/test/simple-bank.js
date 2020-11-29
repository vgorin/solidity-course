// link to SimpleBank smart contract
const SimpleBankContract = artifacts.require("./SimpleBank.sol");

contract("SimpleBank.sol", (accounts) => {
	it("open", async() => {
		// deploy SimpleBank smart contract into network
		const bank = await SimpleBankContract.new();

		// open account 1 – for accounts[1]
		await bank.open({from: accounts[1]});

		// verify account 1 exists
		assert(await bank.exists({from: accounts[1]}), "account 1 doesn't exist after it was created");

		// verify account 1 balance is zero
		assert.equal(0, await bank.balance({from: accounts[1]}), "account 1 balance is not zero after it was just created");

		// verify it is impossible to create same account again
		await expectThrow(bank.open({from: accounts[1]}), "able to create account 1 again");
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
