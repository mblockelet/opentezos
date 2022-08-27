module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Welcome',
      items: ['welcome/modules/modules', 'welcome/paths/paths'],
    },
    {
      type: 'category',
      label: 'Blockchain Basics',
      items: [
        'blockchain-basics/introduction/introduction',
        'blockchain-basics/main-properties/main-properties',
        'blockchain-basics/proof-of-work/proof-of-work',
        'blockchain-basics/other-consensuses/other-consensuses',
        'blockchain-basics/smart-contracts/smart-contracts',
        'blockchain-basics/exam/exam',
      ],
    },
    {
      type: 'category',
      label: 'Tezos Basics',
      items: [
        'tezos-basics/introduction/introduction',
        'tezos-basics/nodes/nodes',
        'tezos-basics/liquid-proof-of-stake/liquid-proof-of-stake',
        'tezos-basics/operations/operations',
        'tezos-basics/cli-and-rpc/cli-and-rpc',
        'tezos-basics/governance-on-chain/governance-on-chain',
        'tezos-basics/history-of-amendments/history-of-amendments',
        'tezos-basics/economics-and-rewards/economics-and-rewards',
        'tezos-basics/exam/exam',
      ],
    },
    {
      type: 'category',
      label: 'Smart contracts',
      items: [
        'smart-contracts/simple-nft-contract-1/simple-nft-contract-1',
        'smart-contracts/call-and-deploy/call-and-deploy',
        'smart-contracts/simple-nft-contract-2/simple-nft-contract-2',
        'smart-contracts/simplified-contracts/simplified-contracts',
        'smart-contracts/smart-contracts-concepts/smart-contracts-concepts',
        'smart-contracts/avoiding-flaws/avoiding-flaws',
	  ],
    },
    {
      type: 'category',
      label: 'Deploy a node',
      items: [
        'deploy-a-node/introduction/introduction',
        'deploy-a-node/installation/installation',
        'deploy-a-node/set-up-a-node/set-up-a-node',
        'deploy-a-node/networks/networks',
        'deploy-a-node/to-go-further/to-go-further',
        'deploy-a-node/exam/exam',
      ],
    },
    {
      type: 'category',
      label: 'How to use an Explorer',
      items: [
        'explorer/introduction/introduction',
        'explorer/indexer-explained/indexer-explained',
        'explorer/available-tezos-indexers/available-tezos-indexers',
        'explorer/tzstats-main-features/tzstats-main-features',
        'explorer/tzstats-smart-contract/tzstats-smart-contract',
        'explorer/private-indexer/private-indexer',
        'explorer/exam/exam',
      ],
    },
    {
      type: 'category',
      label: 'Archetype',
      items: [
        'archetype/introduction/introduction',
        'archetype/completium/completium',
        {
          type: 'category',
          label: 'Raffle example',
          items: ['archetype/raffle-example/contract/raffle-contract', 'archetype/raffle-example/test/unit-test'],
        },
        {
          type: 'category',
          label: 'Events',
          items: ['archetype/events/intro/emit-receive', 'archetype/events/example/event-example', 'archetype/events/dappexample/dapp-event-example'],
        },
        'archetype/templates/examples'
      ],
    },
    {
      type: 'category',
      label: 'SmartPy',
      items: ['smartpy/introduction/introduction', 'smartpy/installation/installation', 'smartpy/write-contract-smartpy/write-contract-smartpy', 'smartpy/exam/exam'],
    },
    {
      type: 'category',
      label: 'LIGO',
      items: [
        'ligo/introduction/introduction',
        'ligo/installation/installation',
        {
          type: 'category',
          label: 'Raffle example',
          items: ['ligo/write-contract-ligo/raffle-contract/1-raffle-contract', 'ligo/write-contract-ligo/launch-raffle/2-launch-raffle', 'ligo/write-contract-ligo/buy-ticket/3-buy-ticket', 'ligo/write-contract-ligo/close-raffle/4-close-raffle', 'ligo/write-contract-ligo/refactoring/5-refactoring'],
        },
        'ligo/deploy-a-contract/deploy-a-contract',
        'ligo/unit-testing/unit-testing',
        'ligo/examples/examples',
        'ligo/exam/exam',
        'ligo/take-away/take-away',
      ],
    },
    {
      type: 'category',
      label: 'Michelson',
      items: [
        'michelson/introduction/introduction',
        'michelson/smart-contracts/smart-contracts',
        'michelson/tutorial/tutorial',
        'michelson/examples/examples',
        'michelson/instructions-reference/instructions-reference',
        'michelson/exam/exam',
        'michelson/take-away/take-away',
      ],
    },
    {
      type: 'category',
      label: 'Build a Dapp',
      items: [
        'dapp/introduction/introduction',
        'dapp/taquito/taquito',
        'dapp/temple-wallet/temple-wallet',
        {
            type: 'category',
            label: 'Deploy',
            items: [
                'dapp/deploy/introduction/introduction',
                'dapp/deploy/deploy-with-taquito/deploy-with-taquito',
                'dapp/deploy/deploy-with-truffle/deploy-with-truffle',
                'dapp/deploy/deploy-with-chinstrap/deploy-with-chinstrap'
            ]
        },
        'dapp/frontend-basics/frontend-basics',
        'dapp/frontend-advanced/frontend-advanced',
        'dapp/exam/exam',
      ],
    },
    {
      type: 'category',
      label: 'Baking',
      items: [
        'baking/introduction/introduction',
        'baking/baking_explained/baking_explained',
        'baking/reward/reward',
        'baking/risks/baking_risks',
        'baking/delegating/delegating',
        'baking/bakers_list/bakers_list',
        'baking/cli-baker/cli-baker',
        'baking/glossary/glossary',
        'baking/exam/exam',
      ],
    },
    {
      type: 'category',
      label: 'DeFi',
      items: [
        'defi/introduction/introduction',
        'defi/token-standards/token-standards',
        'defi/dexs/dexs',
        'defi/wrapped-assets/wrapped-assets',
        'defi/cross-chain-swaps/cross-chain-swaps',
        'defi/oracles/oracles',
        'defi/stablecoins/stablecoins',
        'defi/synthetics/synthetics',
        'defi/lending/lending',
        {
          type: 'category',
          label: 'Rolling SAFE',
          items: ['defi/rolling-safe/presentation/presentation', 'defi/rolling-safe/smart-contract/smart-contract'],
        },
        'defi/exam/exam',
      ],
    },
    {
      type: 'category',
      label: 'Formal Verification',
      items: [
        'formal-verification/introduction/introduction',
        'formal-verification/general/general',
        'formal-verification/michocoq/michocoq',
        'formal-verification/modeling-theorem/modeling-theorem',
        'formal-verification/exam/exam',
      ],
    },
    {
      type: 'category',
      label: 'Private Blockchain',
      items: [
        'private/introduction/introduction',
        'private/installation/installation',
        'private/genesis/genesis',
        'private/starting-blockchain/starting-blockchain',
        'private/using-blockchain/using-blockchain',
        'private/vpn/vpn',
        'private/exam/exam',
      ],
    },
    {
      type: 'category',
      label: 'How to contribute',
      items: [
        'contribute/introduction/introduction',
        'contribute/report-issue/report-issue',
        'contribute/opentezos/opentezos',
        'contribute/tezos-core/tezos-core',
        'contribute/grant/grant',
        'contribute/baker/baker',
        'contribute/exam/exam',
      ],
    },
  ],
}
