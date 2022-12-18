---
title: "Flow blockchain"
metaTitle: "Flow blockchain"
metaDescription: "‍Flow is a fast, decentralized, and developer-friendly blockchain"
---

Created by the team behind Cryptokitties the first successful NFT project. This application was created in 2017 on top of the Ethereum blockchain but they had a hard time getting this to work and the app went down multiple times because Ethereum could not scale enough. As a result they created there own blockchain. Flow does not use sharding.

n a traditional blockchain, every node stores the entire state (account balances, smart contract code, etc.) and performs all of the work associated with processing every transaction in the chain. This is analogous to having a single worker build an entire car. 

From manufacturing to CPU design, pipelining is a common technique for dramatically scaling up productivity. Flow applies pipelining to blockchains by separating the jobs of a validator node into four different roles: Collection, Consensus, Execution, and Verification. This separation of labor between nodes is vertical (across the different validation stages for each transaction) rather than horizontal (across different transactions, as with sharding). 

In other words, every validator node still participates in the validation of every transaction, but they do so only at one of the stages of validation. They can therefore specialize for — and greatly increase the efficiency of — their particular stage of focus. 

More info can be found in the Flow [primer](https://www.onflow.org/primer)