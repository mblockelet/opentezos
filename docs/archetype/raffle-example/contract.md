---
id: raffle-contract
title: Raffle contract
authors: Benoit Rognier
---

This section presents the Archetype version of the _raffle_ contract, presented as well in the other languages ([Ligo](/ligo/write-contract-ligo/1-raffle-contract#raffle-smart-contract), [Smartpy](/smartpy/write-contract-smartpy#about-the-raffle-contract)). A raffle is a gambling game, where players buy tickets; a winning ticket is _randomly_ picked and its owner gets the jackpot prize.

The [Michelson](/michelson) machine does **not** provide an instruction to generate a random number though; and current contract date (`now` value) cannot be used for random number generation purpose either, because a baker could influence the process by selecting the time to generate the block.

:::info
The code source of the raffle contract and the test scenario are available in this [repository](https://gitlab.com/completium/archetype-raffle).
:::

## Picking the winning ticket

The winning ticket id is obtained as the remainder of the euclidean division of an arbitraly large number, called here the _raffle key_, by the number of ticket buyers, called here _players_. For example, if the raffle key is 2022, and the number of raffle players is 87, then the winning ticket id is 21 (typically the 21st ticket).

The raffle key has several constraints:
* it cannot be publically hardcoded in the contract, because, if it is known by anyone, a player could influence the process by buying tickets until one of the tickets is the winning one.
* it cannot either be known only by the admin, and passed by the admin to the contract when it is time to declare the winner. Indeed the admin could decide not to declare the winner.

The solution is to keep the raffle key secret to everyone and then, when the raffle is closed, make it publically available so that anyone can transfer the jackpot to the winner. This is the purpose of the [timelock](https://tezos.gitlab.io/alpha/timelock.html?highlight=timelock) encryption feature of the Michelson `chest` data type.

A _timelocked_ value is encrypted so that it takes a certain amount of time (passed as an argument to the encryption process) for a descent machine to crack it. That is to say that, beyond a certain amount of time, the value may be considered public.

## Raffle storage

The contract is parameterized as follows:

```archetype
archetype raffle(owner: address, min_duration : duration, jackpot : tez, ticket_price : tez)
```
where:
* `owner` is the address of the contract administrator
* `min_duration` is the minimum duration tickets can buy bought
* `jackpot` is the prize in tez
* `ticket_price` speaks for itslef

The contract holds:

* the timelocked raffle key, initialized to `none`:
```archetype
variable locked_raffle_key : option<chest>  = none
```
* the date beyond which ticket cannot be bought, initialized to `none`:
```archetype
variable close_date : option<date> = none
```
* some information about the raffle, initialized to `none`:
```archetype
variable desc : option<string> = none
```
* the collection of the player addresses:
```archetype
asset player {
  id : address
}
```
* a state of 3 possible values:
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

The `open` entrypoint is called by the contract admin (called "owner"). It requires that:
* the minimum duration be respected by the close date
* the transferred amount of tez be equal to the storage value `jackpot`

It transition from `Created` state to `Running`, and sets the raffle parameters.

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
* the contract by in `Running` state
* the transferred amount of tez be equal to the ticket price
* the close date be not reached

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

Note that the `add` method fails with the error `(Pair "KeyExists" "player")` if the caller already has bought a ticket.

### `transfer_prize`

The `transfer_jackpot` may be called by anyone with the key to the `raffle_key` chest for the jackpot to be transferred to the winner. It requires that:
* the close date has been reached

It also transitions the contract to the `Transferred` state and transfers the ticket amount to the contract's owner.

```archetype
transition transfer_jackpot(k : chest_key, time : nat) {
  require {
    r4 : now > opt_get(close_date) otherwise "RAFFLE_OPEN";
  }
  from Running to Transferred
  with effect {
    match unlock_raffle_key(k, time) with
    | Success(raffle_key) -> begin
        transfer jackpot to player.nth(raffle_key % player.count());
        transfer (balance - jackpot) to owner;
        player.clear()
      end
    | Fail(error) -> fail(error)
    end
  }
}
```

#### `unlock_raffle_key`

The `unlock_raffle_key` function, called by the `transfer_jackpot` entrypoint, unlocks the `raffle_key` value. Note that the extracted value is also unpacked.

```archetype
enum unlock_result =
| Success<nat>
| Fail<string>

function unlock_raffle_key(k : chest_key, time : nat) : unlock_result {
  return (
    match open_chest(k, opt_get(locked_raffle_key), time) with
    | left(unlocked) ->
      match unpack<nat>(unlocked) with
      | some(raffle_key) -> Success(raffle_key)
      | none -> Fail("INVALID_RAFFLE_KEY_TYPE")
      end
    | right(v) -> if v then Fail("INVALID_TIMELOCK") else Fail("INVALID_CHEST_KEY")
    end)
}
```
