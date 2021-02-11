# hypns-did-resolver
Decentralized resolver of HyPNS DIDs

Pass in a [`hypns node`](https://www.npmjs.com/package/hypns) and get resolved!

This is the HyPNS version of [ethr DID Resolver](https://github.com/decentralized-identity/ethr-did-resolver), for those who don't like to pay gas fees.

Implements the interface at [decentralized-identity/did-resolver](https://github.com/decentralized-identity/did-resolver) which allows DID method implementors to release npm packages that applications can add.

Exports a resolver function and shows how to configure it in a local resolver object.

## Exported resolver function

```js
import { Resolver } from 'did-resolver'
import hypnsResolve from 'hypns-did-resolver'

//returns an object of { methodName: resolveFunction}
hypnsResolver = hypnsResolve.getResolver()

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

# Caching
Resolving DID Documents can be expensive. OH WAIT, THAT'S FOR BLOCKCHAIN. Hypns is free since it uses hypercore-protocol and it's self hosted by you and your friends. No need to cache, it's already done for you.

But you can still enable the cache.

