# Yet Another Solidity Course
by Basil Gorin

# Prerequisites
 
## macOS Catalina

1. Clone the repository  
    ```git clone git@github.com:vgorin/solidity-course.git```
2. Navigate into the cloned repository  
    ```cd solidity-course```
3. Install [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) – latest  
    ```brew install nvm```
4. Install [Node package manager (npm)](https://www.npmjs.com/) and [Node.js](https://nodejs.org/) – version 15.1.0  
    ```nvm install v15.1.0```
5. Activate node version installed  
    ```nvm use v15.1.0```
6. Install [Truffle Suite](https://www.trufflesuite.com/) – version 5.1.52  
    ```npm install -g truffle@v5.1.52```
7. Install [Ganache CLI](https://github.com/trufflesuite/ganache-cli) – latest  
    ```npm install -g ganache-cli```  

## Ubuntu 20.04.1 LTS Codename: focal

Before you begin, do not forget to update your apt repository  
    ``` sudo apt update && sudo apt upgrade ```
    
1. Clone the repository  
    ```git clone git@github.com:vgorin/solidity-course.git ```  
2. Navigate into the cloned repository  
    ```cd solidity-course```
3. Install nodejs  
    ```sudo apt install nodejs && sudo apt install npm ```
4. Add path to the nvm  
    ```
    export NVM_DIR="$HOME/.nvm"
    # This loads nvm
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    #This loads nvm bash_completion
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
    ```

5. Install nodejs version 15.1  
    ```nvm install v15.1.0```
6.  Install [Truffle Suite](https://www.trufflesuite.com/)  version 5.1.52  
    ```npm install -g truffle@v5.1.52```
7. Install [Ganache CLI](https://github.com/trufflesuite/ganache-cli)  latest  
    ```npm install -g ganache-cli```


# Course Contents
[Module 1. Hello World!](module01/README.md)  
Taste your first Solidity application!  
Time required: **5 minutes**

[Module 2. Simple Bank](module02/README.md)  
Create a simple bank dapp. Learn mappings and ether transfers.  
Time required: **15 minutes**


# References
1. [A Definitive List of Ethereum Developer Tools](https://github.com/ConsenSys/ethereum-developer-tools-list)  
    A guide to available tools, components, frameworks, and platforms for developing applications on Ethereum.
