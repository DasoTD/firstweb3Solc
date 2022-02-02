// import solc from 'solc';

// let input = {
//     language: 'Solidity',
//     sources: {
//       'test.sol': {
//         content: 'contract C { function f() public { } }'
//       }
//     },
//     settings: {
//       outputSelection: {
//         '*': {
//           '*': ['*']
//         }
//       }
//     }
//   };


//   let output = JSON.parse(solc.compile(JSON.stringify(input)));

//   for (let contractName in output.contracts['test.sol']) {
//     console.log(
//       contractName +
//         ': ' +
//         output.contracts['test.sol'][contractName].evm.bytecode.object
//     );
//   }

const Web3 = require('web3');

let web3 = new Web3('ws://localhost:8546');
//console.log(web3);

//web3.setProvider('ws://localhost:8546');
web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));

web3.eth.getAccounts().then(console.log);
web3.eth.sendTransaction