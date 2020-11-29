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
		assert.equal(0, await bank.balance({from: accounts[1]}), "account 1 balance is not zero after it was just created")
	});
});
