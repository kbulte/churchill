---
title: "Blockchain"
metaTitle: "Blockchain"
metaDescription: "Blockchain"
---
# Difference between a distributed ledger and a blockchain?

Blockchains are distributed ledgers but not every distributed ledger is a blockchain.
A blockchain is just a specific type of distributed ledger (DLT)
Distributed ledgers are decentralized datastores but do not require block datastructures or tokens like blockchains do. In a DLT every node which can cross sites, countries, companies or institutions has a full copy of the data.
This requires a peer to peer network and a consensus algorithm.

# why are many distributed ledger APIs written with gRPC?

For most distributed ledgers the performance is critical therefore they choose gRPC above REST.
Grpc is roughly 7 times faster than REST when receiving data and 10 times faster sending data.
Not limited to the http verbs, easier to do batch operations which cannot be done in a nice way in REST.

# what's the difference between JSON-RPC and gRPC?

In May 2020 the Libra engineering team announced they replaced their gRPC based client API with a JSON-RPC based one.
They had chosen gRPC above REST because of the batch support needed and because it is schema based. Because the binary format gRPC uses was not end user friendly. Another reason was the gRPC API cannot be used by javascript in the browser. While REST is not binary and works very well with javascript based clients it has no batch support.
In the end the Libra team used JSON-RPC because of the following characteristics:

- HTTP-based
- Schema can be enforced but manual (not out of the box)
- Batch support
- In Browser JS support
- Human-readable response format

# why are so many blockchains written in RUST?

- Speed and performance
- Typesafety and null checking
- Low level programming
- Compilers, low level networking, embedded devices like IOT devices
- Compiles to webassembly for computational intensive tasks like games, image manipulation, math, physics

At the moment of writing both Polkadot and Solana make use of Rust.

# what is the blockchain trilemma?

//TODO

# what layers are there in blockchain

layer one examples: Ethereum, Solana
