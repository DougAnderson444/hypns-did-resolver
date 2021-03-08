import { createHypnsDid } from 'js-did-hypns'

// https://github.com/decentralized-identity/did-resolver
export function getResolver (opts = {}) {
  const HypnsDid = createHypnsDid()

  async function resolve (
    did,
    parsed,
    didResolver
  ) {
    // {
    // method: 'mymethod',
    // id: 'abcdefg',
    // did: 'did:mymethod:abcdefg/some/path#fragment=123',
    // path: '/some/path',
    // fragment: 'fragment=123'
    // }
    const didDoc = await HypnsDid.resolve(did) // lookup doc
    // If you need to lookup another did as part of resolving this did document, the primary DIDResolver object is passed in as well
    // const parentDID = await didResolver.resolve(...)
    //
    return didDoc
  }

  return { hypns: resolve }
}
