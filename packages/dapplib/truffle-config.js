require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strike rival place artist harvest casual flock gift'; 
let testAccounts = [
"0xede0695155453ea8cbdc578df97a06a0b20079ad52e3bb515104d0f5b90f82a1",
"0x3a540cd9101ae837fd1e4b4a71c4c9c1c0c006e123ea77ace7449bfabfe6b50b",
"0x05a9ce6f05c9232037a49f0efb9cadca62c1d4607679b1c1cfae39c4015af222",
"0xc69ad6e89068c9c944f755ea4aa3362f7a2f1cb6b1c53603c89796cead07d5ac",
"0x533e48d1f67158e0780d0389262586c3a9f6e86f78d990e71d79f3a1ecd45ecb",
"0x880249ca2bbab250228e71a60e6069f6997d5ea0369b9e55e7e84558d7f1bb89",
"0x2bf6be9a7396663e1e5ece9079f5de3b07973d10e4a55a37aae5f4e0524f7b51",
"0x18f9a73acc6e2ccc0cf2293803af42fa44ac69b266ca0992cbf31ce089c58f93",
"0x094b5cc49334e005ed9de0b62dad39ca7a398f793a39c61467858832073c151d",
"0xade53719131beb2cd369b267516c5089a4b2cf9337038132ff76a07d3e5748f8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

