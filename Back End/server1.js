const ethCrypto = require('eth-crypto');
const axios = require('axios');
const unit = require('ethjs-unit');

// Create a new Account
// const account = ethCrypto.createIdentity();
// console.log(account);

let address = "0x9197313C232951ceBE9Dd247DED27C031FCbA28D";
let url = 'https://api-ropsten.etherscan.io/api?module=account&action=balance&address=' + address + '&tag=latest&apikey=EYGDUDZDT2WY95BJDYG8QWWNZJBIERAIGQ';
axios.get(url).then(function(response)
{
    if (response.status == 200 && response.data.result) {
        let balance = unit.fromWei(response.data.result, 'ether');
        console.log(balance);
    }
    else{
        console.log("Error");
    }
});
