---
id: 1-deploy-with-taquito
title: Deploy with Taquito
authors: Damien ZONDA
---

The first step to creating a Dapp is to deploy a smart contract on the Tezos network, whether for testing or real-life use. There are several ways to do this, such as using the Tezos CLI.

However, during development, the smart contracts and the associated storage are likely to change: new field, field removal, structure change. For each change, a new deployment must be done.

Thus, the way that the contract is deployed will change accordingly, especially the initial storage. A minimal change in the storage definition can make the next deployments tiresome when using the Tezos CLI, especially if changes are made several times.

In this chapter, we will deploy the _Raffle_ smart contract, as developed in the [LIGO module](/ligo/write-contract-ligo/1-raffle-contract.md) onto a testnet using _Taquito_.

## About *Taquito*

_Taquito_  is TypeScript library suite for development on the Tezos blockchain. An [entire chapter is dedicated to this library](/dapp/taquito).

Before starting this chapter, it is important to have done the chapter on Taquito, especially the [installation](/dapp/taquito#installation) and the [configuration](/dapp/taquito#taquito-configuration) parts and having a [faucet activated](/dapp/taquito#activating-the-account-from-taquito). Although this chapter takes up these elements, they will not be explained in detail.

## Initializing the deployment

Let's start by installing the necessary dependencies :

``` shell
mkdir deploy
touch deploy/main.ts
cd deploy
npx typescript --init --resolveJsonModule
yarn add typescript @taquito/taquito @taquito/signer @taquito/utils 
```

Then, Taquito must be initialized and the signer provider set. Remember that the faucet imported __must__ be activated.

The basis of the project therefore looks like this :

``` typescript
// main.ts
import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';

import * as faucet from './faucet.json';

const RPC_URL = "https://hangzhounet.smartpy.io";

const deploy = async () => {
    try {
        const tezos = new TezosToolkit(RPC_URL);
        tezos.setSignerProvider(InMemorySigner.fromFundraiser(faucet.email, faucet.password, faucet.mnemonic.join(' ')));



    } catch (err) {
        console.log(err);
    }
}

deploy();
```

Let's run it with:

``` shell
$ npx ts-node main.ts
```

If _Taquito_ is correctly installed and configured, this should not raise any exception.

## Compiling smart contracts

To be deployed with Taquito, the smart-contract must be compiled in Michelson in JSON format.

The ligo compiler allows this by passing the flag `--michelson-format` when compiling the contract:

```shell
ligo compile contract --michelson-format json raffle.ligo > contracts/raffle.json
```

The contract is now ready to be deployed. We can import it into our project :

``` typescript
// main.ts
...
import raffleJson from './contracts/raffle.json';
...
```

## *Taquito* Origination

### Defining the initial storage 

A smart contract defines a storage. When originated, the initial storage must be set and the storage must be compliant with the structure defined in the smart contract to be deployed: the names and types must be respected.
It also allows you to work with types specific to Michelson, such as bigmaps. 

We therefore need to import two additional functions :

``` typescript
import { MichelsonMap } from '@taquito/taquito';
import { buf2hex } from '@taquito/utils';
```

Below is the matching table between Javascript and LIGO.

| LIGO             | Javascript                                                                                      |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| List, Tuple, Set | []                                                                                              |
| Big_map, Map     | const bigMap = new MichelsonMap() <br /> bigMap.set(key, values) <br /> *(from taquito module)* |
| string, address  | string                                                                                          |
| bytes            | `buf2hex(Buffer.from(string_to_convert))`                                                       |
| int, nat, mutez  | number                                                                                          |
| record           | Object {}                                                                                       |
| timestamp        | Date.now()                                                                                      |

Here is what our initial storage should look like :

``` typescript
// main.ts
import { TezosToolkit, MichelsonMap } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
import { buf2hex } from '@taquito/utils';

import * as faucet from './faucet.json';
import raffleJson from './contracts/raffle.json';

const RPC_URL = "https://hangzhounet.smartpy.io";

const deploy = async () => {
    try {
        // Initialize Taquito
        const tezos = new TezosToolkit(RPC_URL);
        tezos.setSignerProvider(InMemorySigner.fromFundraiser(faucet.email, faucet.password, faucet.mnemonic.join(' ')));

        // Initial storage definition
        const admin = faucet.pkh;               // Admin address.
        const closeDate = Date.now() + 10;    
        const jackpot = 100;
        const description = "This is an incredible Raffle.";
        const players = [] as any[];
        const soldTickets = new MichelsonMap();
        const raffleIsOpen = true;
        const winningTicketHash = buf2hex(Buffer.from("ec85151eb06e201cebfbb06d43daa1093cb4731285466eeb8ba1e79e7ee3fae3"));

        const initialStorage = {
            "admin": admin,
            "close_date": closeDate.toString(),
            "jackpot": jackpot,
            "description": description,
            "players": players,
            "sold_tickets": soldTickets,
            "raffle_is_open": raffleIsOpen,
            "winning_ticket_number_hash": winningTicketHash
        }

    } catch (err) {
        console.log(err);
    }
}

deploy();
```

Any type and structure change in the LIGO smart contract storage must be mirrored in the initialStorage variable. This way, the evolution of the storage used can be versioned.

### Deploying the contract

Originations can be sent with `tezos.contract.originate`. It returns a `Promise<OriginationOperation<DefaultContractType>>`.

A `OriginationOperation` contains the information about this origination. It also has a confirmation method. This method can wait for several confirmations on demand.

Let's deploy our contract with this function by setting your code in JSON Michelson format and our initial storage :


``` typescript
// main.ts
import { TezosToolkit, MichelsonMap } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
import { buf2hex } from '@taquito/utils';

import * as faucet from './faucet.json';
import raffleJson from './contracts/raffle.json';

const RPC_URL = "https://hangzhounet.smartpy.io";

const deploy = async () => {
    try {
        // Initialize Taquito
        const tezos = new TezosToolkit(RPC_URL);
        tezos.setSignerProvider(InMemorySigner.fromFundraiser(faucet.email, faucet.password, faucet.mnemonic.join(' ')));

        // Initial storage definition
        const admin = faucet.pkh;               // Admin address.
        const closeDate = Date.now() + 10;    
        const jackpot = 100;
        const description = "This is an incredible Raffle.";
        const players = [] as any[];
        const soldTickets = new MichelsonMap();
        const raffleIsOpen = true;
        const winningTicketHash = buf2hex(Buffer.from("ec85151eb06e201cebfbb06d43daa1093cb4731285466eeb8ba1e79e7ee3fae3"));

        const initialStorage = {
            "admin": admin,
            "close_date": closeDate.toString(),
            "jackpot": jackpot,
            "description": description,
            "players": players,
            "sold_tickets": soldTickets,
            "raffle_is_open": raffleIsOpen,
            "winning_ticket_number_hash": winningTicketHash
        }

        const origination = await tezos.contract.originate({
            code: raffleJson,
            storage: initialStorage,
          });
        
          await origination.confirmation();
          const contract = await origination.contract();

          console.log(`Operation Hash: ${origination.hash}`);
          console.log(`Contract Address : ${contract.address}`);
    } catch (err) {
        console.log(err);
    }
}

deploy();
```

Run the script and retrieve the operation hash and the contract address :

```shell
npx ts-node main.ts
Operation Hash: oo9jUpwnfCnNqywT5dqFuoMhWgn9Ve3bKYqivNUy1jn3t2kKTb8
Contract Address : KT1Dkdiju5crR6qQMy9ozzWvTaVHBTA476gb
```

We can now check the [transaction](https://hangzhou2net.tzkt.io/oo9jUpwnfCnNqywT5dqFuoMhWgn9Ve3bKYqivNUy1jn3t2kKTb8) and the [contract](https://hangzhou2net.tzkt.io/KT1Dkdiju5crR6qQMy9ozzWvTaVHBTA476gb/operations) on an explorer.


# Conclusion

The first step in developing a Dapp is to deploy the smart contracts. _Taquito_ takes Michelson code and deploys it onto any public or private network.

Each origination needs an initial storage that is compliant with the storage type of the Michelson code.
