# Blog Client JavaScript Library Sample

## 1. Preconditions

### 1.1 Node.js
Above the v17.5.0 version, [https://git-scm.com/downloads.](https://nodejs.org/en/download/)
### 1.2 Git
Above the 1.8.3.1 version,[ https://git-scm.com/downloads.](https://git-scm.com/downloads)

## 2. Source Code
### 2.1 Tx(index.js)
```js
import { Client } from 'blog-client-js';
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
### 2.2 Query(query.js)
```js
import { Client } from 'blog-client-js';
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
```

## 3. Four Steps
### 3.1. Download blog-client-js-sample
```
git clone https://github.com/ignite-tutorials/blog-client-js-sample.git
```

### 3.2. Download cosmjs
```
git clone -b v0.29.3 https://github.com/cosmos/cosmjs
```

### 3.3. Install dependencies
```
cd blog-client-js-sample 
npm install ../cosmjs
npm install https://github.com/ignite-tutorials/blog-client-js/
```

### 3.4. Run
```
npm run test
```
