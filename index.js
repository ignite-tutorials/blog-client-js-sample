import { Client } from 'blog-client-ts';
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

const mnemonic = "vast unlock traffic humor destroy crush decrease tornado heart color despair prize shell whip robust wheel magnet unusual suffer tent april identify creek outside";
const prefix = "blog";

const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
  mnemonic,{
    prefix: prefix
  }
);

const client = new Client({ 
    apiURL: "http://localhost:1317",
    rpcURL: "http://localhost:26657",
    prefix: prefix
  },wallet
);

const fee = {
    amount: [
      {
        denom: "token",
        amount: "5",
      },
    ],
    gas: "180000",
  };  


const createPost_Result = await client.BlogBlog.tx.sendMsgCreatePost({
    value: {
      creator:'blog1n9jv7mla2qtwqt2g2pukypnm7scf7vqexz8vv0',
      title:'Hello ignite',
      body:"I'm Bruce, how are you?"
    }},
    fee,
    'New blog post about ignite'
);

console.log(createPost_Result);
