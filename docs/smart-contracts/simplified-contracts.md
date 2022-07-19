---
id: simplified-contracts
title: Examples of contracts
authors: Mathias Hiron, Nomadic Labs
---

In this chapter, we will present the structure of simplified versions of a number of classical smart contracts:
- [FA1.2 - Fungible token](#fa1.2)
- [FA2 - NFTs: Non Fungible Tokens](#fa2)
- [NFT Marketplace](#nft-marketplace)
- [Escrow](#escrow)
- [DAO: Decentralized Autonomous Organization](#dao)
- [DeFi: Flash loan](#flash-loan)

The goal is for you to get a good understanding of what a smart contract is, how the storage and entry points are used. We will also introduce how and why contracts interact with each other.

Finally, this will give you an overview of what some of the most common smart contract may look like.

> **Warning**: the contracts below are simplified contracts, provided for educational purposes only. They are not meant to be implemented and used as is, as some of them may contain potential flaws.

## <a name="fa1.2">FA1.2 - Fungible token</a>

The goal of this contract is to create and manage a single fungible token.

It implements the FA1.2 standard, which makes it compatible with wallets, decentralized exchanges and other tools.

It only supports a small number of features:
- Each user can own a certain number of tokens
- Users can transfer tokens to other users
- Users can allow another contract, for example a decentralized exchange, to transfer some amount of their tokens for them.

The contract contains two main entry points:
- <code>transfer</code>, to transfer a number of token from one address to another
- <code>approve</code>, for a caller to indicate that they allow another address to transfer a number of their tokens

To be compatible with FA1.2, and so that other contacts can access to information, it also contains three entry points that have no effect other than sending information back to the caller:
- <code>getBalance</code> sends the number of tokens owned by a given address
- <code>getAllowance</code> sends the amount of tokens belonging to a certain address that another address is allowed to transfer for them
- <code>getTotalSupply</code> sends the total amount of tokens managed by this contract

<table>
<tr><td><strong>Storage</strong></td><td><strong>Entry points effects</strong></td></tr>
<tr><td>
	<ul>
		<li>totalsupply: nat</li>
		<br/>
		<li>ledger: big-map<br/>
			Key:
			<ul>
				<li>holder: address</li>
			</ul>
			Value:
			<ul>
				<li>tokens: nat</li>
			</ul>
		</li><br/>
		<li>allowance: big-map<br/>
			Key:
			<ul>
				<li>owner: address</li>
				<li>spender: address</li>
			</ul>
			Value:
			<ul>
				<li>amount: nat</li>
			</ul>
		</li><br/>
	</ul>
</td>
<td>
	<ul>
		<li>transfer(from: address, to: address, value:nat)
			<ul>
				<li>Check that <code>ledger[from].tokens</code> &ge; <code>value</code></li>
				<li>If the caller address is not <code>from</code>
					<ul>
						<li>Check that <code>allowance[from, caller]</code> exists, with <code>amount</code> &ge; <code>value</code></li>
						<li>Substract <code>value</code> from <code>allowance[from, caller].amount</code></li>
						<li>If <code>allowance[from, caller].amount</code> = 0, delete <code>allowance[from, caller]</code></li>
					</ul>
				</li>
				<li>Create entry <code>ledger[to]</code> with 0 tokens, if it doesn't exist.</li>
				<li>Substract <code>value</code> from <code>ledger[from].tokens</code></li>
				<li>Add <code>value</code> to <code>ledger[to].tokens</code></li>
			</ul>
		</li><br/>
		<li>approve(sender: address, value: nat)
			<ul>
				<li>Create entry <code>allowance[caller, sender]</code> with <code>amount</code> 0, if it doesn't exist.</li>
				<li>Add <code>value</code> to <code>allowance[caller, sender].amount</code></li>
			</ul>
		</li><br/>
		<li>getBalance(owner: address, callback: contract)
			<ul>
				<li>If <code>ledger[owner]</code> exists, set <code>ownerBalance</code> to <code>ledger[owner].tokens</code></li>
				<li>Otherwise, set <code>ownerBalance</code> to 0</li>
				<li>Call <code>callback(ownerBalance)</code></li>
			</ul>
		</li><br/>
		<li>getAllowance(owner: address, spender: address, callback: contract)
			<ul>
				<li>If <code>allowance[owner, spender]</code> exists, set <code>amount</code> to <code>allowance[owner, spender]</code></li>
				<li>Otherwise, set <code>amount</code> to 0</li>
				<li>Call <code>callback(amount)</code></li>
			</ul>
		</li><br/>
		<li>getTotalSupply(callback: contract)
			<ul>
				<li>Call <code>callback(totasupply)</code></li>
			</ul>
		</li>
	</ul>
</td>
</tr>
</table>

## <a name="fa2">FA2 - NFTs: Non Fungible Tokens</a>

The FA2 standard specifies contracts that can be of different types:
- Single fungible token
- Multiple fungible tokens
- Non fungible tokens (NFTs)

Implementing the FA2 standard allows the contract to be compatible with wallets, explorers, marketplaces, etc.

Here, we will present an implementation for NFTs. The entry points for the other types are the same, but the implementation differs.

FA2 contracts must have the following entry points:
- <code>transfer</code> can be called either by the owner of tokens to be transferred, or by an operator allowed to do so on their behalf.<br/>It takes a list of transfers of different tokens from the owner, to different addresses.
- <code>update_operator</code> can be called by the owner of tokens to add or remove operators allowed to perform transfers for them.<br/>It takes a list of variants, each consisting in either addding or removing an operator for a given token.
- <code>balance_of</code> is used to access the balance of a user for a given token.

FA2 supports a number of optional entry points to access information, but we won't provide them here.

<table>
<tr><td><strong>Storage</strong></td><td><strong>Entry points effects</strong></td></tr>
<tr><td>
	<ul>
		<li>ledger: big-map<br/>
			Key:
			<ul>
				<li>token_id: nat</li>
			</ul>
			Value:
			<ul>
				<li>owner: address</li>
				<li>metadata: string</li>
			</ul>
		</li><br/>
		<li>operators: big-map<br/>
			Key:
			<ul>
				<li>owner: address</li>
				<li>operator: address</li>
				<li>token_id: nat</li>
			</ul>
			Value:
			<ul>
				<li>nothing</li>
			</ul>
		</li><br/>
	</ul>
</td>
<td>
	<ul>
		<li>transfer(from: address, transfers: list of [to: address, token_id: nat, amount: nat])
			<ul>
				<li>For each item <code>[to, token_id, amount]</code> in <code>transfers</code>
					<ul>
						<li>Check that <code>amount</code> is 1</li>
						<li>Check that <code>caller</code> is <code>from</code>, or that <code>operators[from, caller, token_id]</code> exists</li>
						<li>Check that <code>ledger[token_id].owner</code> is <code>from</code></li>
						<li>Set <code>ledger[token_id].owner</code> to <code>to</code></li>
					</ul>
				</li>
			</ul>
		</li><br/>
		<li>update_operator(updates: list of [type: variant, owner: address, operator: address, token_id: nat])
			<ul>
				<li>For each item in updates of type <code>add_operator</code>:
					<ul>
						<li>Check that <code>owner</code> is the caller</li>
						<li>Create entry <code>operators[owner, operator, token_id]</code> if it doesn't exist.</li>
					</ul>
				</li>
				<li>For each item in updates of type <code>remove_operator</code>:
					<ul>
						<li>Check that <code>owner</code> is the caller</li>
						<li>Delete entry <code>operators[owner, operator, token_id]</code> if it exists.</li>
					</ul>
				</li>
			</ul>
		</li><br/>
		<li>balance_of(requests: list of [owner: address, token_id: nat], callback: address)
			<ul>
				<li>Create list <code>results</code> of [owner: address, token_id: nat, balance: nat]</li>
				<li>For each request in requests:
					<ul>
						<li>If <code>ledger[token_id].owner</code> is <code>owner</code>, set <code>balance</code> to 1</li>
						<li>Otherwise, set <code>balance</code> to 0</li>
						<li>Add [<code>owner</code>, <code>token_id</code>, <code>balance</code>] to results</li>
					</ul>
				</li>
				<li>Call callback(results)</li>
			</ul>
		</li>				
	</ul>
</td>
</tr>
</table>

## <a name="nft-marketplace">NFT Marketplace</a>

The goal of this contract is to manage sales of NFTs from one address to another. It pays a share of the selling price to the admin of the marketplace, in exchange for providing a dApp that facilitates finding and purchasing NFTs.

It provides the following entry points:
- <code>add</code> is called by a seller who puts their one of their NFTs on sale for a given price.<br/>The seller must indicate which FA2 contract holds the NFT, and what the id of the NFT is within that contract.<br/>It requires for the marketplace to have been set as an operator in the FA2 contract, for this token.
- <code>remove</code> can be called by a seller to remove their NFT from the marketplace, if it hasn't been sold.
- <code>buy</code> is to be called by a buyer who pays the set price to buy a given NFT.<br/>The admin account of the marketplace receives a share of the selling price.

<table>
<tr><td><strong>Storage</strong></td><td><strong>Entry points effects</strong></td></tr>
<tr><td>
	<ul>
		<li>admin: address</li><br/>
		<li>fee_rate: nat</li><br/>
		<li>tokens: big-map<br/>
			Key:
			<ul>
				<li>contract:&nbsp;address</li>
				<li>token_id: nat</li>
			</ul>
			Value:
			<ul>
				<li>seller: address</li>
				<li>price: tez</li>
			</ul>
		</li><br/>
	</ul>
</td>
<td>
	<ul>
		<li>add(token_contract: address, token_id: nat, price: tez)
			<ul>
				<li>Transfer token ownership to the marketplace:<br/>
					call token_contract.transfer(caller, [self, token_id, 1])</li>
				<li>Add entry [token_contract, token_id] to tokens with values [caller, price]</li>
			</ul>
		</li><br/>
		<li>remove(token_contract: address, token_id: nat)
			<ul>
				<li>Check that caller is the seller of the token:<br/>
					check that <code>tokens[token_contract, token_id].seller</code> is <code>caller</code></li>
				<li>Transfer token ownership back to seller:<br/>
					call token_contract.transfer(self, [caller, token_id, 1])</li>
				<li>Delete entry [token_contract, toen_id] from tokens</li>
			</ul>
		</li><br/>
		<li>buy(token_contract: address, token_id: nat)
			<ul>
				<li>Check that the token is on sale for the amount paid by the caller:<br/>
					check that <code>tokens[token_contract, token_id].amount</code> = amount_paid</li>
				<li>Transfer token ownership to the caller:<br/>
					call token_contract.transfer(self, [caller, token_id, 1])</li>
				<li>Set admin_fee = fee_rate * amount_paid / 100</li>
				<li>Create transaction to send admin_fee to admin</li>
				<li>Create transaction to send amount_paid - admin_fee to <code>[token_contract, token_id].seller</code></li>
				<li>Delete entry [token_contract, toen_id] from tokens</li>
			</ul>
		</li><br/>
	</ul>
</td>
</tr>
</table>

## <a name="escrow">Escrow</a>

An escrow is a contract that temporarily holds funds in reserve, for example tokens paid by a buyer of a service, while their request is being processed.

Its goal is to provide trust between the parties of a transaction that can't be atomic:
- the buyer can't send the payment to the service until the request has been fulfilled.
- the service can't start working on the request without a guarantee that it will get paid.

There are a number of different types of escrow contracts. In our contract, the service to be provided is some data that needs to be sent by the service, where the escrow contract has the ability to verify the validity of the data.

For example, the request could consist in the service sending the decrypted version of some encrypted data.

Our contract has three entry points:
- <code>send_request</code> creates a new request with a deadline and collects the payment, that will be held in the escrow.<br/>Along with the data, the request contains the code that will verify the validity of the answer (a lambda)
- <code>fulfil_request</code> is to be called later by the service.<br/>It verifies that the request has been performed and transfers the funds to the service.
- <code>cancel_request</code> can be called buy the buyer if the request had not been fulfilled after the deadline.<br/>It transfers the funds back to them.

<table>
<tr><td><strong>Storage</strong></td><td><strong>Entry points effects</strong></td></tr>
<tr><td>
	<ul>
		<li>requests: big-map<br/>
		Key:
		<ul>
			<li>owner: address</li>
			<li>id: nat</li>
		</ul>
		Value:
		<ul>
			<li>amount: tez</li>
			<li>service: contract</li>
			<li>data: bytes</li>
			<li>verification: lambda</li>
			<li>deadline: datetime</li>
			<li>answer: option&lt;bytes&gt;</li>
		</ul>
		</li>
	</ul>
</td>
<td>
	<ul>
		<li>send_request(id, service, data, verification, deadline)
			<ul>
				<li>Check that <code>requests[caller, id]</code> doesn't exist</li>
				<li>Create <code>requests[caller,id]</code> entry with amount_paid and all the parameters</li>
				<li>Create a call to <code>service(data, self, amount, deadline)</code></li>
			</ul>
		</li><br/>
		<li>fulfil_request(id, answer)
			<ul>
				<li>Set <code>request = requests[caller, id]</code>, checking that it exists</li>
				<li>Check that <code>verification(request.data, answer)</code> returns <code>true</code></li>
				<li>Set <code>requests[caller, id].answer</code> to <code>answer</code></li>
				<li>Create transaction to send <code>request.amount</code> to <code>caller</code></li>				
			</ul>
		</li><br/>
		<li>cancel_request(id)
			<ul>
				<li>Set <code>request = requests[caller,id]</code>, checking that it exists</li>
				<li>Check that <code>request.answer</code> is <code>none</code>, meaning the request hasn't been processed</li>
				<li>Check that the deadline has expired: <code>now > request.deadline</code></li>
				<li>Create transaction to send <code>request.amount</code> to <code>caller</code></li>
				<li>Delete <code>requests[caller,id]</code> entry</li>
			</ul>
		</li>
	</ul>
</td>
</tr>
</table>

## <a name="dao">DAO: Decentralized Autonomous Organization</a>

A DAO is a contract that represents an entity composed of a number of participants. It provides a way for these participants to collectively take decisions, for example on how to use tokens held in the balance of the DAO contract.

There can be all kinds of DAOs, and we will present a simple but powerful version.

Our DAO stores the addresses of all its members, a list of all the proposals, and keeps track of who voted for them.

It has the following entry points :
- <code>propose</code> can be called by any member to make a new proposal, in the form of a piece of code to execute (a lambda).
- <code>vote</code> can be called by any member to vote in favor of the request.<br/>When the majority of members voted in favour, the proposal is executed.
- <code>add_member</code> adds a new member to the DAO.<br/>It may only be called by the DAO itself, which means the call has to go through a proposal and be voted on.
- <code>remove_member</code> removes a member from the DAO.<br/>It may only be called by the DAO itself.

When deployed, an initial list of members needs to be put in the storage, and typically some tez put in the balance.

<table>
<tr><td><strong>Storage</strong></td><td><strong>Entry points effects</strong></td></tr>
<tr><td>
	<ul>
		<li>nb_members: nat</li><br/>
		<li>members: big-map<br/>
			Key:
			<ul>
				<li>user: address</li>
			</ul>
			Value:
			<ul>
				<li>nothing</li>
			</ul>
		</li><br/>
		<li>requests: big-map<br/>
			Key:
			<ul>
				<li>id: nat</li>
			</ul>
			Value:
			<ul>
				<li>action: lambda</li>
				<li>deadline: datetime</li>
				<li>nb_votes: nat</li>
			</ul>
		</li><br/>
		<li>votes: big-map<br/>
			Key:
			<ul>
				<li>request_id: nat</li>
				<li>user: address</li>
			</ul>
			Value:
			<ul>
				<li>nothing</li>
			</ul>
		</li>
	</ul>
</td>
<td>
	<ul>
		<li>propose(id, action, deadline)
			<ul>
				<li>Check that <code>requests[id]</code> doesn't exist</li>
				<li>Check that the caller is a member: <code>members[caller]</code> exists</li>
				<li>Create requests[id] entry with values of action and deadline, and with nb_votes set to 0</li>
			</ul>
		</li><br/>
		<li>vote(id)
			<ul>
				<li>Check that the caller is a member: <code>members[caller]</code> exists</li>
				<li>Check that the deadline is not passed: <code>now > requests[id].deadline</code></li>
				<li>Check that the caller has not voted: <code>votes[id, caller]</code> doensn't exist</li>
				<li>Record vote: create <code>votes[id, caller]</code> entry</li>
				<li>Increment <code>requests[id].nb_votes</code></li>
				<li>If we have a majority of votes: <code>requests[id].nb_votes * 2 > nb_members</code>
				<ul>
					<li>Excecute <code>requests[id].lambda</code>, and the transactions it returns.</li>
					<li>Delete entry <code>requests[id]</code></li>
				</ul>
				</li>
			</ul>
		</li><br/>
		<li>add_member(user)
			<ul>
				<li>Check that the caller is the DAO itself: <code>caller == self</code></li>
				<li>Create entry <code>members[user]</code>, checking that it doesn't already exist.</li>
				<li>Increment <code>nb_members</code></li>
			</ul>
		</li><br/>
		<li>remove_member(user)
			<ul>
				<li>Check that caller is the DAO itself: <code>caller == self</code></li>
				<li>Delete entry <code>members[user]</code>, checking that it exists.</li>
				<li>Decrement <code>nb_members</code></li>
			</ul>
		</li>
	</ul>
</td>
</tr>
</table>

## <a name="flash-loan">DeFi: Flash loan</a>

A Flash loan is one of the many tools of decentralized Finance (deFi).

It provides a way for a user to temporarily get access to large amounts of tez, without any collateral. This allows them to take advantage of opportunities and make a profit, without the need to have their own funds.

The idea is that the following steps can will be done in an atomic way:
- the borrower receives the requested amount from the contract
- the borrower uses the amount in a series of calls to other contracts, that allow him to make some instant profit
- the borrower then pays the requested amount plus some interest to the contract, and gets the rest of the profit.

The key aspect to understand is that all this is done atomically, which means that if any of these step fails, and if for example the borrower is not able to pay back the borrowed amount plus interest, then the whole sequence is canceled, as if it never happens. There is no risk at all for the lender contract.

This contract can even lend the same tez to multiple different people within the same block, as each loan is paid back immediately, so the tokens can be used again for another loan.

One may use a flash loan to take advantage of an arbitrage situation, for example if two different exchanges offer to buy/sell the same type of tokens, at a different price from eachother. The user can buy tokens from one exchange at a low price, then sell it to the other exchange at a higher price, making a profit.

Our contract has three entry points:
- <code>borrow</code> is called by the borrower, indicating how many tez they need.<br/>The amount is transferred to the caller, then a callback he provided is executed. At the end of this entry point, we verify that this callback has repaid the loan.
- <code>repay</code> is to be called by this callback, once the actions that generate a profit are done. The call should come with payment of the borrowed amount, plus interest.
- <code>check_repaid</code> is called by the <code>borrow</code> entry point after the call to the callback. Indeed, <code>borrow</code> can't do the verification itself, since the execution of the callback is done after all the code of the entry point is executed.

<table>
<tr><td><strong>Storage</strong></td><td><strong>Entry points effects</strong></td></tr>
<tr><td>
	<ul>
		<li>admin: address</li><br/>
		<li>interest_rate: nat</li><br/>
		<li>in_progress: boolean</li><br/>
		<li>loan_amount: tez</li><br/>
		<li>repaid: booean</li>
	</ul>
</td>
<td>
	<ul>
		<li>borrow(loan_amount: tez, callback: address)
			<ul>
				<li>Check that in_progress is false</li>
				<li>Set in_progress to true</li>
				<li>Transfer loan_amount to caller</li>
				<li>Set storage loan_amount to loan_amount</li>
				<li>Set repaid to false</li>
				<li>Create call to callback</li>
				<li>Create call to check_repaid</li>
			</ul>
		</li><br/>
		<li>repay()
			<ul>
				<li>Check that in_progress is true</li>
				<li>Check that paid_amount is more than loan_amount + interest</li>
				<li>Set repaid to true</li>
			</ul>
		</li><br/>
		<li>check_repaid()
			<ul>
				<li>Check that repaid is true</li>
			</ul>
		</li><br/>
		<li>collect(nbTez)
			<ul>
				<li>Check that caller is admin</li>
				<li>Transfer nbTez to admin</li>
			</ul>
		</li>
	</ul>
</td>
</tr>
</table>
