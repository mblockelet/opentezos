---
id: unit-test
title: Testing
authors: Benoit Rognier
---

This section presents the testing of the raffle contract.

:::info
The code source of the raffle contract and the test scenario are available in this [repository](https://gitlab.com/completium/archetype-raffle).
:::

## Test scenario

The first time, run the following command to install the [Completium](https://completium.com/docs/cli/jslibrary) and [mocha](https://www.npmjs.com/package/mocha) libraries:

```bash
npm i
```

Run the test with:

```bash
npm test
```

The test scenario is made of 14 steps. Below is the trace returned by the command above:
```bash
  Deploy
    ✔ Raffle

  Open Raffle
    ✔ The unauthorized user Alice unsuccessfully calls 'open' entrypoint.
    ✔ Admin unsuccessfully calls 'open' entrypoint with wrong 'close_date'.
    ✔ Admin unsuccessfully calls 'open' entrypoint by sending not enough tez to the contract.
    ✔ Admin successfully calls 'open' entrypoint.
    ✔ Admin unsuccessfully calls 'open' entrypoint because a raffle is already open.

  Test 'buy' entrypoint (at this point a raffle is open)
    ✔ Alice unsuccessfully calls 'buy' by sending a wrong amount of tez.
    ✔ Alice unsuccessfully calls 'buy' entrypoint because raffle is closed.
    ✔ Alice successfully calls 'buy' entrypoint.
    ✔ Alice unsuccessfully calls 'buy' entrypoint because she has already bought one.
    ✔ Jack successfully calls 'buy' entrypoint.

  Test 'transfer_jackpot' entrypoint (at this point a raffle is open and two players participated)
    ✔ Alice unsuccessfully calls 'transfer_jackpot' entrypoint because it is before the 'close_date'.
    ✔ Alice unsuccessfully calls 'transfer_jackpot' entrypoint because of an invalid chest key.
    ✔ Alice successfully calls 'transfer_jackpot' entrypoint.
    ✔ Alice unsuccessfully calls 'transfer_jackpot' entrypoint because jackpot is already transferred.


  15 passing (30s)
```

## Mockup mode

Completium library allows running contracts on any network (mainnet, testnet, sandbox) but also in mockup mode.

Mockup mode runs contracts locally and quickly, it is then adapted to testing the contract. The following JS instruction enables using the mockup mode within the test script:
```js
setEndpoint('mockup')
```

## Accounts

The mockup mode comes with a set of preconfigured test accounts. You can add any test account with the `import faucet` or `generate` CLI command.

Declare handlers to the required test accounts:

```js
const owner = getAccount('bootstrap1');
const alice = getAccount('alice');
const jack  = getAccount('bootstrap2');
```

## Mockup time

Use the `setMockupNow` function to set the contract 'now' value:

```js
const now = Math.floor(Date.now() / 1000)
setMockupNow(now)
```

## Raffle key chest

The raffle key used in this test is the integer `123456`. The value is first packed (turned into bytes) before being timlocked with a number of iteration of 3600.

The following tezos client command enables to pack the value:
```bash
$ tezos-client-hangzhou hash data '123456' of type nat
Warning:

                 This is NOT the Tezos Mainnet.

           Do NOT use your fundraiser keys on this network.

Raw packed data: 0x050080890f
```

Then use the Completium [timelock-utils](https://github.com/completium/timelock-utils) tool to timlock the packed data with the following command:
```bash
$ timelock-utils --lock --data 050080890f --time 3600
{
  "chest":
    "c5ecdde89eb8c1e7aaeb85abb8f5e5cef3b4fa80c4aee2fccbf0a78ce0debaa5e9ddede3ddfbd9abdea28cc7dc99e6d3a9baf3cbae9adaaabc89cbc39e97e2c7a6cba99197d19ba09ddfd181afc997ffbcc5acb2d29ecbb698c2cacbdd83d1b4ced0bffe9cd78295b3fba4d9f9d5f4d4ec9ad3c7e1a8eeb9dba5cbd8a2dbf29af8e4a4c1e4b1edacf98fccefaef9fea4f0bacdd38ecbfe81c3f9839b9e9ab8fbf5f1eabac48a9f8ca7c588eefe94d1f18bd9bcee9aecde8dd285cf9098f4e1a7eec787f3a0e0ff9cd0ce8ec5a2a4e5ecb08fce899eb5baa397fabf90de9397cebc81bbdfb386e6b4da9fd8fdd19ed9f8d684c782b0aacfeebae4f6e7d1c5c1e6a093c68081cf83b991b4ecd7b38aee92deddcad79eb9abe0a0a0c6b5909dc58495f69445fff5ae9cefe8b8beb2fb86ccf5c9ad91989bdad8a3cfbedaffa2de8bf19dc6ac8cbc8a9584fa9f85f9ba958fc6bbc09ac8e7d5f0fdb98b86c1c7d59ad7c6dfc2d2cefaf5d9db909bf0e3acd3ccc792bc9bccbab4a4febda9b685dbc39ea2a4a7b69990d3abd8b9b3d7dbc581b984f3e08a98f7f7f0e697cc8dfd88edc8c3ca8dc3b2a9ccf6cdd6d0efcc848bc8ead5858bbabfcfc1c8ecea84fd9b96a5e4eabb8c918dafe6f78d83e8e1c2e5f8ee88a4ee8dcaeeafffebfcbbfda1e9eb86c582f2eedd9299cbc0a7fce083ced8c8ddb0e7eaacb696c1fccdadcdc8e3c6f7b9de84eece9bb7919094fef4fdf6efd8b1ba8bbecb9380add4f59ddbf9a19f95facc84e9d0a99bfa93f1fcc3a0fbde9b9ce0c7e8dec6e8d1dfa7dda6f490bb9580abfdbcc0e202e5ff731c3c17d080ee430edd30979a47aa653656e11e593800000015c2ca2a23b732a72932611618ad9ea324986377591e"
  "key":
    "a0aceddfb3c9fbe1b8c382c7d5a7dedbe2e5adf9edcfc3e9d084caa6aeb9818ff1e985cb9efe8fa089ceeaa0f5d0bcb583e2f29196f2d3908fffffdcda868faffcb78fb697e7eaf3e7dca9d4b5dda2c3e4f8adf8abf484ecae85f7d6e0f2d28cb69af1d7b19082e8d8d7ba96e7e1e0bb8ac9b9fcf0a9e5b7c1a499c4faf4c8a3a9c8e4d09aa780eac6cee1b78a97a3e983abf9a5f1e8d2a2a2b5e3bcb8c4effeb7a3a68a85a497cd91c9a2c096c3f596deb8d1aca3a5aff28effb8cfc9c7ced892e3a7c09deeb8c8ec9387a3b384b5c8bccaafc7a9a2c1cfd8c7becfd7d6828a9af8f4988fe4ead3b59ecfb8ff8cabf8be90d4c8bdbddfce9cd7c2bb81edc4b7ad80a59a978f8c9debe7aaf08cf0c588f3eaade6b9f4e4e6edf1ed9c9988e48d9ba0aa8f01d18bac92b886db9dd798b5f6fdc891a28da2c4c48da1918897a2b7c2dfa0b78ab8e291b68fb1a2bfa5e8b88e9cabb0b5b0feabcffc9cfeee888ac4afeed9dc8bf5a4eaa9ae89a3838cf6cfd4f8acff8fa7aef7a9889fbbc7d8f6dde4edf3e58096e580e299e5b082b9cf85f3fe8ac6c0998eb1bcbab9bfb8fba39faea7bce0f6fed9ea86dfdad58cf7cbc7fcc4ecf7e2e898d3b19582e38c8092b7e4a0cddc83eb8bc38d91fefed6be869496b8e4fc99d5fae5c6a2b2dcabe2a4ea85b68b87b182d7e8cac29fe0b9efd6d0eb999ffa98aaaf9bf09fe7c4b39d81db97e4e7bbaef0e3bfedd69d9089bc8d91b292afa6c8b389fc9fb7aaa8decab6d9b493a6eafaa5baffe8fb85f2d483ecd1f2d1e58f938df9d8d5e385fe96c5f58ae1e0b09bf2b3c2931f"
}
```
The timelock encryption generates a chest value and its key to unlcock it.

## Writing test

### Deploy contract

Use the `deploy` function to deploy the raffle contract.

```js
let raffle;
[raffle, _] = await deploy('./contract/raffle.arl', {
    parameters: {
        owner        : owner.pkh,
        min_duration : MIN_DURATION,
        jackpot      : JACKPOT,
        ticket_price : TICKET_PRICE
    },
    as: owner.pkh
});
```

### Call an entrypoint

The `raffle` contract object provides the entrypoints as object methods.

```js
await raffle.open({
    arg    : { cd : [now + MIN_DURATION + 10], d : "Raffle test", lrk : LOCKED_RAFFLE_KEY },
    as     : owner.pkh,
    amount : JACKPOT
})
```

### Expect to fail

Use the `expectToThrow` function to assert that the contract fails with a specified error value.

```js
it("Alice unsuccessfully calls 'buy' by sending a wrong amount of tez.", async () => {
    await expectToThrow(async () => {
      await raffle.buy({ as : alice.pkh })
    }, errors.INVALID_TICKET_PRICE)
});
```

### Check Balance

Use the `checkBalanceDelta` method to check the impact of an operation on an account balance.

```js
await checkBalanceDelta(owner.pkh,  2, async () => {
await checkBalanceDelta(alice.pkh, 50, async () => {
await checkBalanceDelta(jack.pkh,   0, async () => {
    await raffle.transfer_jackpot({
        arg : { k : CHEST_KEY },
        as : alice.pkh
    })
}) }) })
```

The code above checks the impact of the `transfer_jackpot` entrypoint on the accounts `owner` `alice` and `jack`.