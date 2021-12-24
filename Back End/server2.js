var Tx = require('ethereumjs-tx').Transaction;
const unit = require('ethjs-unit');
const Web3 = require('web3');

let senderAddress = req.body.senderAddress;
let senderPrivateKey = req.body.senderPrivateKey;
let recipientAddress = req.body.recipientAddress;
let value = unit.toWei(req.body.amount, 'ether');
let gasPrice = unit.toWei(req.body.gasPrice, 'gwei');
let gasLimit = req.body.gasLimit;

const web3 = new Web3('https://ropsten.infura.io/v3/' + infuraAPIKey);

web3.eth.getTransactionCount(senderAddress, 'pending', function(err, result) 
{
    const rawTransaction = 
    {
        nonce: web3.utils.toHex(result),
        to: recipientAddress,
        value: web3.utils.toHex(value),
        gasLimit: web3.utils.toHex(gasLimit),
        gasPrice: web3.utils.toHex(gasPrice),
        chainId: 4
    }

    const tx = new Tx(rawTransaction, {chain:'ropsten', hardfork: 'petersburg'})
    const privateKey = Buffer.from(senderPrivateKey, 'hex')
    tx.sign(privateKey)

    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')

    web3.eth.sendSignedTransaction(raw, function(err, result1) 
    {
        if (err) 
        {
            res.send({success: false, message: err.toString(), data: null});
        }
        else 
        {
            res.send({success: true, message: 'Transaction was sent sucessfully. Transaction hash: ' + result1 + '', data: null});
        }
    });
});