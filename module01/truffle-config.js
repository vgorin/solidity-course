// npm install @truffle/hdwallet-provider
// const HDWalletProvider = require("@truffle/hdwallet-provider");

// babel imports is required to allow ECMAScript 6 imports in tests
// require('babel-register');
// require('babel-polyfill');

// private keys storage
// const keys = require("./keys.js");

/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
	/**
	 * Networks define how you connect to your ethereum client and let you set the
	 * defaults web3 uses to send transactions. If you don't specify one truffle
	 * will spin up a development blockchain for you on port 9545 when you
	 * run `develop` or `test`. You can ask a truffle command to use a specific
	 * network from the command line, e.g
	 *
	 * $ truffle test --network <network-name>
	 */

	networks: {
		// Useful for testing. The `development` name is special - truffle uses it by default
		// if it's defined here and no other network is specified at the command line.
		// You should run a client (like ganache-cli, geth or parity) in a separate terminal
		// tab if you use this network and you must also set the `host`, `port` and `network_id`
		// options below to some value.
		//
		// development: {
		//  host: "127.0.0.1",     // Localhost (default: none)
		//  port: 8545,            // Standard Ethereum port (default: none)
		//  network_id: "*",       // Any network (default: none)
		// },
		// Another network with more advanced options...
		// advanced: {
		// port: 8777,             // Custom port
		// network_id: 1342,       // Custom network
		// gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
		// gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
		// from: <address>,        // Account to send txs from (default: accounts[0])
		// websockets: true        // Enable EventEmitter interface for web3 (default: false)
		// },
		// Useful for deploying to a public network.
		// NB: It's important to wrap the provider as a function.
		// ropsten: {
		// provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
		// network_id: 3,       // Ropsten's id
		// gas: 5500000,        // Ropsten has a lower block limit than mainnet
		// confirmations: 2,    // # of confs to wait between deployments. (default: 0)
		// timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
		// skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
		// },
		// Useful for private networks
		// private: {
		// provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
		// network_id: 2111,   // This network is yours, in the cloud.
		// production: true    // Treats this network as if it was a public net. (default: false)
		// }
		// installation instructions: https://truffleframework.com/docs/truffle/getting-started/installation
		// run with "truffle console", "truffle deploy", read more: https://truffleframework.com/docs/truffle/quickstart
/*
		ropsten: {
			provider: function () {
				return new HDWalletProvider(
					keys.mnemonic3, // create 12 words: https://metamask.io/
					"https://ropsten.infura.io/v3/" + keys.infura_key // create a key: https://infura.io/
				);
			},
			network_id: "3", // Ropsten
			gas: 7500000,
			gasPrice: 21000000000, // 21 GWei
			skipDryRun: true, // if you don't want to test run the migration locally before the actual migration (default is false)
			timeoutBlocks: 5000, // if a transaction is not mined, keep waiting for this number of blocks (default is 50)
		},
*/

		// installation instructions: https://truffleframework.com/docs/truffle/getting-started/installation
		// run with "truffle console", "truffle deploy", read more: https://truffleframework.com/docs/truffle/quickstart
/*
		rinkeby: {
			provider: function () {
				return new HDWalletProvider(
					keys.mnemonic4, // create 12 words: https://metamask.io/
					"https://rinkeby.infura.io/v3/" + keys.infura_key // create a key: https://infura.io/
				);
			},
			network_id: "4", // Rinkeby
			gas: 7000000,
			gasPrice: 21000000000, // 21 GWei
			skipDryRun: true, // if you don't want to test run the migration locally before the actual migration (default is false)
			timeoutBlocks: 5000, // if a transaction is not mined, keep waiting for this number of blocks (default is 50)
		},
*/

		// installation instructions: https://truffleframework.com/docs/truffle/getting-started/installation
		// run with "truffle console", "truffle deploy", read more: https://truffleframework.com/docs/truffle/quickstart
/*
		kovan: {
			provider: function () {
				return new HDWalletProvider(
					keys.mnemonic42, // create 12 words: https://metamask.io/
					"https://kovan.infura.io/v3/" + keys.infura_key // create a key: https://infura.io/
				);
			},
			network_id: "42", // Kovan
			gas: 7500000,
			gasPrice: 1000000000, // 1 GWei
			skipDryRun: true, // if you don't want to test run the migration locally before the actual migration (default is false)
			timeoutBlocks: 5000, // if a transaction is not mined, keep waiting for this number of blocks (default is 50)
		},
*/

		// installation instructions: https://www.npmjs.com/package/ganache-cli
		// run with ./test.sh, read more: https://truffleframework.com/docs/ganache/quickstart
		test: {
			host: "localhost",
			network_id: "*",
			port: 8666,
			gas: 0xffffffff,
			gasPrice: 1
		}
	},

	// Set default mocha options here, use special reporters etc.
	mocha: {
		// timeout: 100000

		// https://mochajs.org/api/mocha#enableTimeouts
		enableTimeouts: false
	},

	solc: {
		optimizer: {
			enabled: true,
			runs: 200 // default is 200, however for function execution the effect is noticeable up to 20000
		}
	},

	// Configure your compilers
	compilers: {
		solc: {
			version: "0.7.5",    // Fetch exact version from solc-bin (default: truffle's version)
			// docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
			// settings: {          // See the solidity docs for advice about optimization and evmVersion
			//  optimizer: {
			//    enabled: false,
			//    runs: 200
			//  },
			//  evmVersion: "byzantium"
			// }
		}
	}
};
