# Module 2. Simple Bank Dapp

You we will create a simple bank smart contract, capable of:

1. Opening an account
2. Depositing ether
3. Transferring ether
4. Withdrawing ether
5. Closing an account

Before you begin make sure to read
[Introduction to Smart Contracts](https://docs.soliditylang.org/en/v0.7.5/introduction-to-smart-contracts.html).

1. Navigate into course repository, module 2  
    `cd solidity-course/module02`
2. Install module 2 dependencies  
    `npm install`

    Notice: `node_modules` folder appears. It contains module 2 npm dependencies.

3. Open [contracts/SimpleBank.sol](contracts/SimpleBank.sol) with your favorite text editor and take a look through the
source code. Think how you would implement function bodies (marked with TODOs).
Source code is documented in a [NatSpec Format](https://docs.soliditylang.org/en/v0.7.5/natspec-format.html),
read through the source code comments to better understand what needs to be implemented.

4. Implement 5 function bodies:
    * `function open() public`
    * `function deposit() public payable`
    * `function transfer(address payable to) public`
    * `function withdraw() public`
    * `function close() public`

    Note: You may want to take a look at
    [Blind Auction Example](https://docs.soliditylang.org/en/v0.7.5/solidity-by-example.html#blind-auction)
    to better understand how to receive and send ether payments.

5. Verify your implementation by running tests: execute  
    ```./test.sh```

    Tests will notify you about the errors detected in implementations.
    Work to resolve the errors until you get all the tests passing:
    
    ```
    Contract: SimpleBank.sol
      ✓ open (261ms)
      ✓ deposit (338ms)
      ✓ transfer (514ms)
      ✓ withdraw (270ms)
      ✓ close (541ms)
    
    
    5 passing (2s)
    ```

6. File [contracts/SimpleBank.solution](contracts/SimpleBank.solution) contains one of the possible implementations.
You may check it to better evaluate your own implementation.
