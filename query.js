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

const result = await client.BlogBlog.query.queryPosts({})
console.log(result);
