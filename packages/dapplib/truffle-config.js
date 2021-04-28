require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe story cruise spider around grid civil army genre'; 
let testAccounts = [
"0x8c8f2897a8fc83159afe280b47422678f4b7279e42579490b5346a5bced0bb5b",
"0xc5ecb3d3cc4d714c877d2bfbbcffcc1a37061eed35bc44226bfcdbe1613ca93c",
"0x9176ea76bbbe24b74a19d1e422729b8f68454fcb8782f739ebeaeee2d6185182",
"0xc77e0b2acd1779fbcec7e93f69df73a9103f338a78d1466531d985d2ef7783d4",
"0xed75d1bf7a67385de61836d45e2f649cf28a24b0d6723fce797872cda4fa22ff",
"0x0fff209eb9de0b54f01cb79ce2f0b4f565acb771a01e15f3d5d3ad3328e2007b",
"0x546464490fba52e33ef4c0c4109ffd1d4f212538f7325db2140d3881a8f4cb46",
"0x18c6e4efa7c0dd59801d91e71b68d4971bc789a2db6da7499af5ea6feb327ea5",
"0x07cb5598f2d48503b97cce426e467e73979c9f113aa5679b861713b02204e59b",
"0xef58ee6c8c78f539b2e6984a58f24caa32652bb8af062d14912e22102cb3b53d"
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
            version: '^0.5.11'
        }
    }
};
