# Module 1. Hello World!

1. Navigate into course repository, module 1  
    ```cd solidity-course/module01```
2. Install module 1 dependencies  
    ```npm install```
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
6. Run  
    ```./test.sh```  

    Note: you may need to add ```x``` permission for ```test.sh``` script to run:  
    ```chmod +x test.sh```

7. Notice your first smart contract output:  
    ```
     Contract: HelloWorld
   Hello World!
       ✓ sayHello (92ms)
   
   
     1 passing (124ms)
   ```

8. Modify the contents of the return statement in ```HelloWorld.sol``` and repeat steps 5–6.
Notice the changes in the output.
