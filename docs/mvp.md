# Arcade City Lightning MVP Specification

Draft specification of Arcade City Lightning minimum viable product (MVP).

Initial steps toward broader plan of [Bitcoinizing Arcade City](bitcoinizing.md).

### Objectives

1. Get a userbase of primarily non-technical gig economy users (drivers and riders) interacting meaningfully with Bitcoin on Lightning as soon as possible.
2. Allow users to begin earning Bitcoin immediately.

### Initial featureset

1. Allow users to send Bitcoin peer-to-peer via Lightning
2. Allow users to earn Bitcoin for user referrals

### Relay nodes?

The [Bitcoinizing doc](bitcoinizing.md) describes a broader architecture including Arcade relay nodes.

We don't need relay nodes for an MVP. Let's see how far we can get without them.

For the MVP we prioritize rapid iteration over decentralization.

### Tech Stack

- React Native, specifically the [stack](https://github.com/ArcadeCity/arcade#tech-stack) from our v5 mobile app
- [LNBits](https://lnbits.com/) as Lightning backend
- [Supabase](https://supabase.io/) as auth/storage backend

### Why LNBits

Advantages:

- Account system works well with our user auth model
- Can develop quickly using the hosted version at lnbits.com
- Open-source - can run our own instance
- Works with various funding sources: CLightning, LND, LNbits, LNPay, lntxbot, OpenNode
- Lots of cool extensions including plans for [BUber](https://twitter.com/arcbtc/status/1434255551312060419) which can be [interoperable with Arcade City](https://twitter.com/arcbtc/status/1434259197596684294)
- Plays nicely with [Nostr](https://github.com/fiatjaf/nostr) which we [want to use](https://twitter.com/ArcadeCityHall/status/1434574141756264452)

### Go-to-Market Strategy

This will be released as a regular update ("v5.1") to the main Arcade City mobile app which is currently at v5.0.

App will be available globally.

### Codebase

Code will be 100% open-source (GPL3) in [this repo](https://github.com/ArcadeCity/arcade), specifically the [city-mobile package](https://github.com/ArcadeCity/arcade/tree/main/packages/city-mobile).
