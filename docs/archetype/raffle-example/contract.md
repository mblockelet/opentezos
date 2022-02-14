---
id: raffle-contract
title: Raffle contract
authors: Benoit Rognier
---

This section presents the Archetype version of a _raffle_ contract, inspired by the version presented for other languages ([Ligo](/ligo/write-contract-ligo/1-raffle-contract#raffle-smart-contract), [Smartpy](/smartpy/write-contract-smartpy#about-the-raffle-contract)). A raffle is a gambling game, where players buy tickets; a winning ticket is _randomly_ picked and its owner gets the jackpot prize.

The [Michelson](/michelson) language does **not** provide an instruction to generate a random number. We can't use the current date (value of `now`) as a source of randomness either. Indeed, bakers have some control on this value for the blocks they produce, and could therefore influence the result.

:::info
The source code of the raffle contract and the orresponding test scenario are available in this [repository](https://gitlab.com/completium/archetype-raffle).
:::

## Picking the winning ticket

The winning ticket id is obtained as the remainder of the euclidean division of an arbitraly large number, called here the _raffle key_, by the number of ticket buyers, called here _players_. For example, if the raffle key is 2022, and the number of raffle players is 87, then the winning ticket id is 21 (typically the 21st ticket).

In this version, we let the admin select the _raffle key_. This means the admin could cheat, but we will ignore that possibility for now.

There are several constraints:
* the value of the _raffle key_ cannot be simply stored in the contract. Indeed, the storage of a contract is publicly available, and anyone could predict the result, and influencing it by changing the total number of tickets. This means a player could keep buying tickets until one of their tickets is the winning one.
* the _raffle key_ cannot be a secret that only the admin knows, and that they will pass to the contract when it is time to announce the winner. Indeed, the admin could disappear, and no winner would ever be announced.

One solution is to store the raffle key in the contract, but encrypt it using the [timelock](https://tezos.gitlab.io/alpha/timelock.html?highlight=timelock) encryption feature of the Michelson `chest` data type.

A _timelocked_ value is encrypted stroungly enough that even the most powerful computer will take more than a certain amount of time to crack it, but weakly enough that given a bit more time, any decent computer will manage to crack it. That is to say that, beyond a certain amount of time, the value may be considered public.

This means that if the admin doesn't reveal the value of the _raffle key_ when expected, someone else could run the necessary computation to unlock it, then reveal it and get a reward for their work, while the winner receives their prize.


## Raffle storage

The contract is parameterized as follows:

```archetype
archetype raffle(owner: address, min_duration : duration, jackpot : tez, ticket_price : tez)
```
where:
* `owner` is the address of the contract administrator
* `min_duration` is the minimum duration of the period during which players can buy a ticket
* `jackpot` is the prize in tez
* `ticket_price` speaks for itslef

The contract holds:

* the timelocked raffle key, initialized to `none`:
```archetype
variable locked_raffle_key : option<chest>  = none
```
* the date beyond which tickets cannot be bought, initialized to `none`:
```archetype
variable close_date : option<date> = none
```
* some information about the raffle, initialized to `none`:
```archetype
variable desc : option<string> = none
```
* a collection that will contain the addresses of all players:
```archetype
asset player {
  id : address
}
```
* a state with 3 possible values:
```archetype
states =
| Created initial
| Running
| Transferred
```
where:
* `Created` is the initial state during which tickets cannot be bought yet
* `Running` is the state when the administrator opens the raffle for ticket selling
* `Transferred` is the state when prize has been transferred to the winner

## Entrypoints

### `open`

The `open` entrypoint is called by the contract admin (called "owner"), who provides a deadline, a description, and a chest that contains the encrypted _raffle key_.

It requires that:
* the minimum duration be respected by the close date
* the transferred amount of tez be equal to the `jackpot` storage value 

It transitions from `Created` state to `Running`, and sets the raffle parameters.

```archetype
transition open(cd : date, d : string, lrk : chest) {
  called by owner
  require {
    r0 : now + min_duration < cd   otherwise "INVALID_CLOSE_DATE";
    r1 : transferred = jackpot     otherwise "INVALID_AMOUNT"
  }
  from Created to Running
  with effect {
    locked_raffle_key := some(lrk);
    close_date        := some(cd);
    desc              := some(d);
  }
}
```

### `buy`

The `buy` entrypoint may be called by anyone to buy a ticket. It requires that:
* the contract be in `Running` state
* the transferred amount of tez be equal to the ticket price
* the close date not be reached

It records the caller's address in the `player` collection.

```archetype
entry buy () {
  state is Running
  require {
    r2 : transferred = ticket_price otherwise "INVALID_TICKET_PRICE";
    r3 : now < opt_get(close_date)  otherwise "RAFFLE_CLOSED"
  }
  effect { player.add({ caller }) }
}
```

Note that the `add` method fails with the error `(Pair "KeyExists" "player")` if the caller has already bought a ticket.

### `transfer_jackpot`

The `transfer_jackpot` entry point may be called by anyone with the key to the `raffle_key` chest for the jackpot to be transferred to the winner. It requires that:
* the close date has been reached

It also transitions the contract to the `Transferred` state and transfers the ticket amount to the contract's owner.

```archetype
transition transfer_jackpot(k : chest_key, time : nat) {
  require {
    r4 : now > opt_get(close_date) otherwise "RAFFLE_OPEN";
  }
  from Running to Transferred
  with effect {
    match open_chest(k, opt_get(locked_raffle_key), time) with
    | left(unlocked) -> begin
        var raffle_key = opt_get(unpack<nat>(unlocked));
        transfer jackpot to player.nth(raffle_key % player.count());
        transfer (balance - jackpot) to owner;
        player.clear()
      end
    | right(error) -> fail("INVALID_TIMELOCK")
    end
  }
}
```

