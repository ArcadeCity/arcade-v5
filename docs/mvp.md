# Arcade City Lightning MVP Specification

Draft specification of Arcade City Lightning minimum viable product (MVP).

Initial steps toward broader plan of [Bitcoinizing Arcade City](bitcoinizing.md).

### Objective

Get a userbase of primarily non-technical gig economy users (drivers and riders) interacting meaningfully with Bitcoin on Lightning as soon as possible.

The [Bitcoinizing doc](bitcoinizing.md) describes a broader architecture including Arcade relay nodes.

We don't need relay nodes for an MVP. Let's see how far we can get without them.

### Tech Stack

- React Native
- LNBits

### Why LNBits

For a backend service we'll use LNBits. Advantages:

- Account system works with our user auth model
- Can develop quickly using the hosted version at lnbits.com
- Open-source - can run our own instance
- Works with various funding sources: CLightning, LND, LNbits, LNPay, lntxbot, OpenNode
- Lots of cool extensions including plans for [BUber](https://twitter.com/arcbtc/status/1434255551312060419) which can be [interoperable with Arcade City](https://twitter.com/arcbtc/status/1434259197596684294)
- Plays nicely with [Nostr](https://github.com/fiatjaf/nostr) which we [want to use](https://twitter.com/ArcadeCityHall/status/1434574141756264452)
