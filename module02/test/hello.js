// link to HelloWorld smart contract
const HelloWorldContract = artifacts.require("./HelloWorld.sol");

contract("HelloWorld.sol", () => {
	it("sayHello", async() => {
		// deploy HelloWorld smart contract into network
		const hello = await HelloWorldContract.new();

		// trigger sayHello function and print its output
		console.log(await hello.sayHello());
	});
});
