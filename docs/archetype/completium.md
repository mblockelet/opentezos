---
id: completium
title: Completium
authors: Benoit Rognier
---

## CLI

Archetype compiler comes with the [Completium CLI](https://completium.com/docs/cli). You can deploy and interact with Archetype contracts from the command line.

### Install

The CLI is distributed as a npm package:

```bash
npm i -g @completium/completium-cli
completium-cli init
```

### Import faucet

The following command imports a faucet:

```bash
completium-cli import faucet faucet.json as alice
```

### Deploy and call contract

For example, the following command deploys the contract _escrow.arl_:

```bash
completium-cli deploy escrow.arl --as alice
```

The following command calls the entrypoint _init_:

```bash
completium-cli call escrow --entry init --amount 5tz --as alice
```

## JS library

The [Completium JS library](https://completium.com/docs/cli) enables to interact with smart contracts from a JS script.

It is used to develop test scenarios that make sure the contract behaves as it is intended to.

### Example

```js
const { deploy, getBalance, checkBalanceDelta } = require('@completium/completium-cli')

const test = async () => {
  // Scenario
  var [escrow, _] = await deploy('escrow.arl')

  checkBalanceDelta(alice, 0, async () => {
    await escrow.init({ amount: '5tz' }, { as: alice })
    await escrow.inc_value({ as: alice })
    await escrow.inc_value({ as: alice })
    await escrow.complete({ as: alice })
  })
}

test()
```

Learn more about Completium's [JS API](https://completium.com/docs/cli/jslibrary).
