---
id: set-up-a-node
title: Set-up a node
authors: Maxime Sallerin
---

In this chapter, we will see how to create and deploy your own node.

### Node initial configuration (This is optional)

It is possible to define the directory where the data will be stored with the `--data-dir` command line switch (by default, it is stored in `.tezos-node`)

By default, the network is Mainnet but, you can specify the network with the `--network` option.

For example, the following command configure the node for the Jakartanet Network and stores data in a specified directory:

```shell
./tezos-node config init --data-dir ~/tezos-jakartanet --network jakartanet
```

More about Networks in the [Networks chapter](/deploy-a-node/networks).

If you want to know more about possible alternative node configurations, check out [Node Configuration](https://tezos.gitlab.io/user/node-configuration.html) from the official documentation.

### Node identity

First, you must generate a new identity in order to connect to the Tezos network.

```
./tezos-node identity generate
```

The identity comprises a pair of cryptographic keys that nodes use to encrypt the messages sent to each other. 

> Note that this is merely a network identity. It is not related in any way to a Tezos address on the blockchain.

It will take some time to generate the keys. An `identity.json` file will then be generated in the `~/.tezos-node` (by default) directory. It will contain our public and private keys. Keep it safe and secure!

### Node synchronisation

Whenever a node starts, it tries to retrieve the most recent head of the chain from its peers and all the block from the Genesis to that head. This can be a long process if there are many blocks to retrieve.

So, rather than taking days to download the Tezos blockchain from the P2P network, a node can be quickly synchronized in a few minutes from a **snapshot**.

> The term snapshot is a bit of an unfortunate term as it already has another meaning in Tezos, which is the periodical context picture necessary to establish future baking rights. To be clear, the snapshot we are talking about is completely different from the context snapshot. This snapshot is a compressed copy of the chain starting from a given block.
> To learn more about snapshots, [here](https://blog.nomadic-labs.com/introducing-snapshots-and-history-modes-for-the-tezos-node.html) is an article from Nomadics Labs.

#### Downloading snapshot

Download the correct snapshot depending on whether you want to configure your node on the [Mainnet](/deploy-a-node/networks#mainnet) or on a [Testnet](/deploy-a-node/networks#test-networks).

1. Download the last **rolling** snapshot on this site [snapshots-tezos.giganode.io](https://snapshots-tezos.giganode.io/) (use the 'WEB' link)
   > The file is about 1.3 GB and should take a few minutes to download.
2. Copy the file into the `/tezos` folder.

A snapshot contains all the blocks from genesis to some point or at least x cycles in the past.

- **rolling mode** are the most lightweight snapshots. Keeping a minimal rolling fragment of the chain and deleting everything before this fragment. Safe for baking, endorsing, and validating new blocks.
- **full mode** store all chain data since the genesis block of the chain, but drop the archived contexts below the current checkpoint. Safe for baking, endorsing, and validating new blocks.

#### Importing a snapshot

The mechanism of Snapshots can help to reduce the synchronization time.

The following command bootstraps an empty Tezos node from the `<snapshot.rolling>` file to a rolling Tezos node.

```shell
./tezos-node snapshot import <snapshot.rolling> --data-dir ~/tezos-jakartanet
```

> This command should take a few minutes.

You can add the `--block <BLOCK_HASH>` option argument to verify that the block contained in the snapshot is the one that you are expecting to import. Otherwise, don???t forget to check the hash of the imported block displayed by the node when importing.

#### Snapshot information

When retrieving a snapshot, it can be useful to check the actual content of the snapshot. To do so, the node???s `snapshot info` command can be used to display snapshot???s information such as:

- snapshot???s version
- chain name
- history mode
- targeted block hash, level and timestamp
- ???

The command can be used as following:

```shell
./tezos-node snapshot info <snapshot.rolling>
```

### Starting the node

With the following command, the node will now catch up syncing with the live network.

```shell
./tezos-node run --rpc-addr 127.0.0.1:8732 --log-output tezos.log &
```

The parameter `--rpc-addr url:port` activate's the RPC interface that will allow communication with the node. By default, it runs on port `8732`, so it is not mandatory to specify it.

Watch the progress by viewing tezos.log
```shell
tail -f tezos.log
```
To stop viewing the log, press CTRL+C (Ubuntu and Mac OS).

The Tezos client can be used to interact with the node. It can query its status or ask the node to perform some actions. For example, after starting your node, you can check if it has finished synchronizing with the following command (you can use another terminal window if you still watch the log):

```shell
./tezos-client bootstrapped
```

When you see the message `Node is Bootstrapped`, your Tezos node is synced with the blockchain, and you may now perform operations on it.

Congratulations on setting up a node!

> Be careful closing terminal windows because **this stops the node**.

## Conclusion

In this module, we have seen how to install Tezos from sources, create our own node, synchronize it with the blockchain and finally launch it.

This module is a prerequisite to becoming a baker, and the [Deploy Bakers](/baking/cli-baker) module explains how to become a baker and start earning Tez rewards.

## References

[1] https://tezos.gitlab.io/introduction/howtouse.html#node-identity

[2] https://www.coincashew.com/coins/overview-xtz/guide-how-to-setup-a-baker/install-a-tezos-node

[3] https://quantifyfitness.com/how-to-solo-bake-tezos-step-by-step-guide/

[4] https://blog.nomadic-labs.com/introducing-snapshots-and-history-modes-for-the-tezos-node.html

[5] https://tezos.gitlab.io/user/node-configuration.html

