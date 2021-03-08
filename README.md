# Hypns-did-resolver

Decentralized resolver of [HyPNS](https://www.npmjs.com/package/hypns) [DIDs](https://w3c.github.io/did-core/)

# Decentralized Identity Standards

See: [decentralized-identity/did-resolver](https://github.com/decentralized-identity/did-resolver)

## Usage

This is the HyPNS version of [ethr DID Resolver](https://github.com/decentralized-identity/ethr-did-resolver), for those who don't like to pay gas fees.

Implements the interface at [decentralized-identity/did-resolver](https://github.com/decentralized-identity/did-resolver) which allows DID method implementors to release npm packages that applications can add.

Exports a resolver function and shows how to configure it in a local resolver object.

Optionally pass in your own [`hypns node`](https://www.npmjs.com/package/hypns) or let the resolver make one for you, and get those DIDs resolved!

Uses [`js-did-hypns`](https://github.com/DougAnderson444/js-did-hypns) under the hood.


## Exported resolver function

```js
import { Resolver } from 'did-resolver'
import hypnsResolve from 'hypns-did-resolver'

//returns an object of { methodName: resolveFunction}
hypnsResolver = hypnsResolve.getResolver({ hypnsNode? }) // hypnsNode optional

//If you are using one method you can simply pass the result of getResolver( into the constructor
const resolver = new Resolver(hypnsResolver)
```

## Resolve a DID Document

The resolver presents a simple resolve() function that returns a ES6 Promise returning the DID document.

```js
resolver.resolve('did:hypns:DEADBEEFDEADBEEFDEADBEEFDEADBEEF/some/path#fragment=123').then(doc => console.log)

// You can also use ES7 async/await syntax
const doc = await resolver.resolve('did:hypns:DEADBEEFDEADBEEFDEADBEEFDEADBEEF/some/path#fragment=123')
```

# Test

You can run the test as `node test.mjs` or `npm run test` and check out the console. It creates a new DID, publishes it to HyPNS, then resolves that DID Doc back for you.

# Caching
Resolving DID Documents can be expensive. OH WAIT, THAT'S FOR BLOCKCHAIN. Hypns is free since it uses hypercore-protocol and it's self hosted by you and your friends. No need to cache, it's already done for you.

But you can still enable the cache.

