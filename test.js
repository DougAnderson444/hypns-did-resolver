import { Resolver } from 'did-resolver'
import { getResolver } from './index.js'
import HyPNS from 'hypns'
import { createHypnsDid } from 'js-did-hypns'

const hypnsResolver = getResolver()
console.log({ hypnsResolver })
// If you are using one method you can simply pass the result of getResolver( into the constructor
const resolver = new Resolver(hypnsResolver)

// Resolve a DID Document
// The resolver presents a simple resolve() function that returns a ES6 Promise returning the DID document.

// create a hypns DID
const opts = { persist: false } // use RAM (or disk)
const myNode = new HyPNS(opts) // create a node, pass in options

const hypnsDid = createHypnsDid()

// open a new instance. Makes a new keyPair for you if no options passed in
myNode.open().then(async (instance) => {
  await instance.ready() // let it configure first

  const operations = () => {}
  const content = await hypnsDid.create(instance, operations)
  console.log({ content })

  // hypnsDid.resolve(`did:hypns:${instance.publicKey.toString('hex')}`).then((document) => {
  //   console.log('Self-resolve:')
  //   console.log({ document })
  // })

  resolver.resolve(`did:hypns:${instance.publicKey.toString('hex')}`).then(doc => {
    console.log('DID DOC RESOLVED BY UNIVERSAL RESOLVER, yay!')
    console.log({ doc })
  })

  // You can also use ES7 async/await syntax
//   const doc = await resolver.resolve('did:hypns:DEADBEEFDEADBEEFDEADBEEFDEADBEEF/some/path#fragment=123')
})
