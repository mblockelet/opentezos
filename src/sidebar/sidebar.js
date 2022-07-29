module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Welcome',
      items: ['welcome/modules', 'welcome/paths'],
    },
    {
      type: 'category',
      label: 'Blockchain Basics',
      items: [
        'blockchain-basics/introduction',
        'blockchain-basics/main-properties',
        'blockchain-basics/proof-of-work',
        'blockchain-basics/other-consensuses',
        'blockchain-basics/smart-contracts',
        'blockchain-basics/exam',
      ],
    },
    {
      type: 'category',
      label: 'Tezos Basics',
      items: [
        'tezos-basics/introduction',
        'tezos-basics/liquid-proof-of-stake',
        'tezos-basics/operations',
        'tezos-basics/cli-and-rpc',
        'tezos-basics/governance-on-chain',
        'tezos-basics/voting',
        'tezos-basics/history-of-amendments',
        'tezos-basics/economics-and-rewards',
        'tezos-basics/exam',
      ],
    },
    {
      type: 'category',
      label: 'Smart contracts',
      items: [
        'smart-contracts/simple-nft-contract-1',
        'smart-contracts/call-and-deploy',
        'smart-contracts/simple-nft-contract-2',
        'smart-contracts/simplified-contracts',
        'smart-contracts/smart-contracts-concepts',
        'smart-contracts/avoiding-flaws',
	  ],
    },
    {
      type: 'category',
      label: 'Deploy a node',
      items: [
        'deploy-a-node/introduction',
        'deploy-a-node/installation',
        'deploy-a-node/set-up-a-node',
        'deploy-a-node/networks',
        'deploy-a-node/to-go-further',
        'deploy-a-node/exam',
      ],
    },
    {
      type: 'category',
      label: 'How to use an Explorer',
      items: [
        'explorer/introduction',
        'explorer/indexer-explained',
        'explorer/available-tezos-indexers',
        'explorer/tzstats-main-features',
        'explorer/tzstats-smart-contract',
        'explorer/private-indexer',
        'explorer/exam',
      ],
    },
    {
      type: 'category',
      label: 'Archetype',
      items: [
        'archetype/introduction',
        'archetype/completium',
        {
          type: 'category',
          label: 'Raffle example',
          items: ['archetype/raffle-example/raffle-contract', 'archetype/raffle-example/unit-test'],
        },
        {
          type: 'category',
          label: 'Events',
          items: ['archetype/events/emit-receive', 'archetype/events/event-example', 'archetype/events/dapp-event-example'],
        },
        'archetype/examples'
      ],
    },
    {
      type: 'category',
      label: 'SmartPy',
      items: ['smartpy/introduction', 'smartpy/installation', 'smartpy/write-contract-smartpy', 'smartpy/exam'],
    },
    {
      type: 'category',
      label: 'LIGO',
      items: [
        'ligo/introduction',
        'ligo/installation',
        {
          type: 'category',
          label: 'Raffle example',
          items: ['ligo/write-contract-ligo/1-raffle-contract', 'ligo/write-contract-ligo/2-launch-raffle', 'ligo/write-contract-ligo/3-buy-ticket', 'ligo/write-contract-ligo/4-close-raffle', 'ligo/write-contract-ligo/5-refactoring'],
        },
        'ligo/deploy-a-contract',
        'ligo/unit-testing',
        'ligo/examples',
        'ligo/exam',
        'ligo/take-away',
      ],
    },
    {
      type: 'category',
      label: 'Michelson',
      items: [
        'michelson/introduction',
        'michelson/smart-contracts',
        'michelson/tutorial',
        'michelson/examples',
        'michelson/instructions-reference',
        'michelson/exam',
        'michelson/take-away',
      ],
    },
    {
      type: 'category',
      label: 'Build a Dapp',
      items: [
        'dapp/introduction',
        'dapp/taquito',
        'dapp/temple-wallet',
        {
            type: 'category',
            label: 'Deploy',
            items: [
                'dapp/deploy/introduction',
                'dapp/deploy/deploy-with-taquito',
                'dapp/deploy/deploy-with-truffle',
                'dapp/deploy/deploy-with-chinstrap'
            ]
        },
        'dapp/frontend-basics',
        'dapp/frontend-advanced',
        'dapp/exam',
      ],
    },
    {
      type: 'category',
      label: 'Baking',
      items: [
        'baking/introduction',
        'baking/baking_explained',
        'baking/reward',
        'baking/delegating',
        'baking/bakers_list',
        'baking/cli-baker',
        'baking/exam',
      ],
    },
    {
      type: 'category',
      label: 'DeFi',
      items: [
        'defi/introduction',
        'defi/token-standards',
        'defi/dexs',
        'defi/wrapped-assets',
        'defi/cross-chain-swaps',
        'defi/oracles',
        'defi/stablecoins',
        'defi/synthetics',
        'defi/lending',
        {
          type: 'category',
          label: 'Rolling SAFE',
          items: ['defi/rolling-safe/presentation', 'defi/rolling-safe/smart-contract'],
        },
        'defi/exam',
      ],
    },
    {
      type: 'category',
      label: 'Formal Verification',
      items: [
        'formal-verification/introduction',
        'formal-verification/general',
        'formal-verification/michocoq',
        'formal-verification/modeling-theorem',
        'formal-verification/exam',
      ],
    },
    {
      type: 'category',
      label: 'Private Blockchain',
      items: [
        'private/introduction',
        'private/installation',
        'private/genesis',
        'private/starting-blockchain',
        'private/using-blockchain',
        'private/vpn',
        'private/exam',
      ],
    },
    {
      type: 'category',
      label: 'How to contribute',
      items: [
        'contribute/introduction',
        'contribute/report-issue',
        'contribute/opentezos',
        'contribute/tezos-core',
        'contribute/grant',
        'contribute/baker',
        'contribute/exam',
      ],
    },
  ],
}
