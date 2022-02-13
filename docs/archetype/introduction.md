---
id: introduction
title: Introduction
slug: /archetype
authors: Benoit Rognier
---

This section presents the Smart Contract language [Archetype](https://archetype-lang.org).

Archetype is an elegant high-level generic purpose language to develop Smart Contracts on the Tezos blockchain. Besides all Michelson features, it provides new types (rational, duration) and design concepts (state machine ...) that ease the development and maintenance of smart contracts.

It also enables formal verification of the contract by transcoding to the [Why3](http://why3.lri.fr/) language.

[How to install Archetype.](https://docs.archetype-lang.org/getting-started-1)

## Business logic

Besides standard [Michelson](/michelson) types, Archetype provides `rational`, `date` and `duration` types to make business logic easy to express.

```archetype
archetype business_logic(holder : address, value : tez, deadline : date)

entry pay () {
  transfer ((1 + 7% * (now - deadline) / 1d) * value) to holder
}
```

The entrypoint `pay` applies a penalty fee of 7% per day beyond deadline to the value transferred to _holder_.

Archetype language provides exlcusive types to easily implement readable business rules: rationals, durations. [Learn more...](https://docs.archetype-lang.org/archetype-language/numbers#rationals)

## Explicit execution conditions

Archetype provides specific syntax to establish execution conditions so that the contract is easy to read and check.

```archetype
archetype exec_cond_demo(admin : address, value : nat)

entry setvalue (v : nat) {
  called by admin
  require {
    r1: transferred > value otherwise "Invalid transferred amount";
    r2: now < 2023-01-01    otherwise "Too late";
  }
  effect {
    value := v;
  }
}
```

The entrypoint `setvalue` executes if the sender is _admin_, if the transferred amount is greater than _value_ and if it is called before 2022.

 [Learn more...](https://docs.archetype-lang.org/archetype-language/action#sections)

## Rich Storage API

The exclusive `asset` data container provides a rich API to access and manipulate collection of record data:
* `add`, `addupate`, `remove`, `removeif`
* `contains`, `get`, `nth`
* `count`, `sum`
* `sort`, `select`
* `head`, `tail`
* ...

```archetype
archetype asset_demo

asset vehicle {
  vin          : string;
  nbrepairs    : nat  = 0;
  dateofrepair : date = now;
}

entry repair_oldest () {
  for v in vehicle.sort(dateofrepair).select(the.nbrepairs = 0).head(3) do
    vehicle.update(v, { nbrepairs += 1; dateofrepair = now })
  done
}
```

The entrypoint `repair_oldest` increments the _nbrepairs_ field of the 3 vehicles with oldest date of repair, and with a number of repairs equal to zero.

An asset collection provides a rich API to read/write data (add, remove, update, addupdate, ...), and to iterate over the collection (select, sort, sum, head, tail, ...). [Learn more...](https://docs.archetype-lang.org/archetype-language/data-model)

## State Machine

It is possible with Archetype to design the contract as a state machine. Transitions may have guard conditions (like _initialize_) and effect on the storage (like _terminate_).

```archetype
archetype state_machine_demo(value : tez, holder : address)

states =
| Created initial
| Initialized
| Terminated

transition initialize () {
  from Created to Initialized
  when { transferred > value }
}

transition terminate () {
  from Initialized to Terminated
  effect { transfer balance to holder }
}
```

State machines are convenient to make the overall process clear and transparent. [Learn more...](https://docs.archetype-lang.org/archetype-language/state-machine)

## Formal Specification

Archetype provides a full-featured specification language for contract invariants and entry point postconditions.

```archetype
specification entry repair_oldest () {
  postcondition p1 {
    0 <= vehicle.sum(nbrepairs) - before.vehicle.sum(nbrepairs) <= 3
  }
}
```

The postcondition `p1` of repair_oldest entry point specifies that the difference between the total number of repairs after the entry point's execution and before, is less or equal to 3.

[Learn more...](https://docs.archetype-lang.org/archetype-language/contract-specification)
