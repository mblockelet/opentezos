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

The constraint is that this raffle key must not be known by anyone, nor the players or even the admin. Indeed if someone knows in advance the raffle key, it is then possible to influence the outcome of the game by buying tickets until one of them is the winning one (there is only one ticket per address, but someone can have several addresses). As a consequence:
* the _raffle key_ cannot be simply stored in the contract.
* the _raffle key_ cannot be a secret that only the admin knows (for the reason above), and that the admin would pass to the contract when it is time to announce the winner. Indeed, the admin could disappear, and no winner would ever be announced.

For the admin not to be the only one to know the key, each player must possess a part of the key (called here _partial key_), such that the raffle key is the sum of each player's partial key. For the player's partial key not to be known by the other players, it must be encrpypted by the player. However, it must also be possible for anyone to know any player's partial key when it is time to declare the winning ticket. Otherwise one player could decide to block the game by not decrypting its key.

The [timelock](https://tezos.gitlab.io/alpha/timelock.html?highlight=timelock) encryption feature of the Michelson `chest` data type provides the required property: a _timelocked_ value is encrypted strongly enough that even the most powerful computer will take more than a certain amount of time to crack it, but weakly enough that given a bit more time, any decent computer will manage to crack it. That is to say that, beyond a certain amount of time, the value may be considered public.

This means that if a player doesn't reveal the value of its partial _raffle key_ when expected, someone else could run the necessary computation to unlock it, then reveal it and get a reward for their work, while the winner receives their prize.

## Raffle storage

The contract is parameterized as follows:

```archetype
archetype raffle(
  owner        : address,
  min_duration : duration,
  jackpot      : tez,
  ticket_price : tez,
  reveal_fee   : rational)
```
where:
* `owner` is the address of the contract administrator
* `min_duration` is the minimum duration of the period during which players can buy a ticket
* `jackpot` is the prize in tez
* `ticket_price` speaks for itslef
* `reveal_fee` is the pourcentage of ticket price transferred when revealing a player's raffke key

The contract holds:

* the date beyond which tickets cannot be bought, initialized to `none`:
```archetype
variable close_date : option<date> = none
```
* The time used to generate the timelocked value of the raffle key (it should be high enough to be compliant with the close date), initialized to `none`:
```archetype
variable chest_time : option<nat> = none
```

* a collection that will contain the addresses of all players and their raffle key :
```archetype
asset player {
  id                 : address;
  locked_raffle_key  : chest;
  chest_time         : nat;
  revealed           : bool = false;
}
```

* the raffle key, updated when a player's partial key is revealed:
```archetype
variable raffle_key  : nat = 0
```

* total number of revealed player's raffle key
```archetype
variable nb_revealed : nat = 0
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

The `open` entrypoint is called by the contract admin (called "owner") to transfer the jackpot amount and set some parameters (_close date_ and _description_)

It requires that:
* the minimum duration be respected by the close date
* the transferred amount of tez be equal to the `jackpot` storage value

It transitions from `Created` state to `Running`, and sets the raffle parameters.

```archetype
transition open(cd : date, t : nat) {
  called by owner
  require {
    r0 : now + min_duration < cd   otherwise "INVALID_CLOSE_DATE";
    r1 : transferred = jackpot     otherwise "INVALID_AMOUNT"
  }
  from Created to Running
  with effect {
    close_date        := some(cd);
    chest_time        := some(t);
  }
}
```

### `buy`

The `buy` entrypoint may be called by anyone to buy a ticket. The player must transfer the encrypted value of the partial raffle key, so that the partial key value may be publically known when it comes to declaring the winner ticket.

It requires that:
* the contract be in `Running` state
* the transferred amount of tez be equal to the ticket price
* the close date not be reached

It records the caller's address in the `player` collection.

```archetype
entry buy (lrk : chest) {
  state is Running
  require {
    r2 : transferred = ticket_price otherwise "INVALID_TICKET_PRICE";
    r3 : now < opt_get(close_date)  otherwise "RAFFLE_CLOSED"
  }
  effect { player.add({ id = caller; locked_raffle_key = lrk }) }
}
```

Note that the `add` method fails with the error `(Pair "KeyExists" "player")` if the caller has already bought a ticket.

### `reveal`

The `reveal` entry point may be called by anyone to reveal a player partial key and contribute to the computation of the raffle key. The caller receives a percentage of the ticket price as a reward.

It requires that:
* the close date has been reached

```archetype
entry reveal(addr : address, k : chest_key) {
  state is Running
  require {
    r4 : now > opt_get(close_date) otherwise "RAFFLE_OPEN";
    r5 : not player[addr].revealed otherwise "PLAYER_ALREADY_REVEALED"
  }
  effect {
    match open_chest(k, player[addr].locked_raffle_key, chest_time) with
    | left (unlocked) -> raffle_key += opt_get(unpack<nat>(unlocked))
    | right(error)    -> fail("INVALID_TIMELOCK")
    end;
    nb_revealed += 1;
    player[addr].revealed := true;
    if nb_revealed = player.count() then
      transfer 0tz to entry self.transfer_jackpot();
    transfer (reveal_fee * ticket_price) to caller;
  }
}
```

When all players have revealed their raffle key, the transition from `Running` state to `Transferred` is executed with `transfer_jackpot`:
```archetype
transition transfer_jackpot() {
  called by selfaddress
  from Running to Transferred
  with effect {
    transfer balance to player.nth(raffle_key % player.count());
    player.clear()
  }
}
```

