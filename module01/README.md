# Module 1. Hello World!

You will write your first smart contract, containing single [pure function](https://en.wikipedia.org/wiki/Pure_function) ```sayHello()```.

Under the hood your smart contract will be compiled (step 5),
deployed into test Ethereum node ([Ganache](https://www.trufflesuite.com/ganache)), and communicated with (step 6).

1. Navigate into course repository, module 1  
    ```cd solidity-course/module01```
2. Install module 1 dependencies  
    ```npm install```  
    
    Notice: ```node_modules``` folder appears. It contains module 1 npm dependencies.
3. Open your favorite text editor and write  
    ```
    // SPDX-License-Identifier: MIT
    pragma solidity 0.7.4;
    
    contract HelloWorld {
        function sayHello() pure public returns (string memory) {
            return "Hello World!";
        }
    }
   ```
4. Save the file as ```HelloWorld.sol``` into ```module01/contracts``` folder  
    Note: you should not change you working dir and stay in ```solidity-course/module01``` folder
5. Compile  
    ```truffle compile```  
    
    Notice: ```build``` folder appears. It contains compiled smart contracts.
6. Run  
    ```./test.sh```  

    Note: you may need to add ```x``` permission for ```test.sh``` script to run:  
    ```chmod +x test.sh```

    Notice ```testrpc.log``` file appears. It ganache-cli log.

    Notice your first smart contract output:  
    ```
     Contract: HelloWorld
   Hello World!
       ✓ sayHello (92ms)
   
   
     1 passing (124ms)
   ```

7. Modify the contents of the return statement in ```HelloWorld.sol``` and repeat step 6.
Notice the changes in the output.

In the next module we will create a simple bank smart contract.
