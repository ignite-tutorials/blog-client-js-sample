# Blog ts-client JavaScript Library sample

## 1. Preconditions
You should download and install git(https://git-scm.com/downloads) and Node.js(https://nodejs.org/en/download/).

## 2. Source Code
### 2.1 Tx
```js
import { Client } from 'blog-client-ts';
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { assertIsDeliverTxSuccess } from "@cosmjs/stargate";

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

const result = await client.BlogBlog.tx.sendMsgCreatePost({
    value: {
      creator:'blog1n9jv7mla2qtwqt2g2pukypnm7scf7vqexz8vv0',
      title:'Hello ignite',
      body:"I'm Bruce, how are you?"
    }},
    fee,
    'New blog post about ignite'
);

assertIsDeliverTxSuccess(result);
```
### 2.2 Query
```js
import { Client } from 'blog-client-ts';
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { assertIsDeliverTxSuccess } from "@cosmjs/stargate";

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
```

## 3. Four Steps
### 3.1. Download blog-ts-client-sample
```
git clone https://github.com/ignite-tutorials/blog-ts-client-sample.git
```

### 3.2. Download cosmjs
```
git clone -b v0.29.3 https://github.com/cosmos/cosmjs
```

### 3.3. Install dependencies
```
cd blog-ts-client-sample 
npm install ../cosmjs
pm install https://github.com/ignite-tutorials/blog-ts-client/
```

### 3.4. Run
```
npm run test
```
