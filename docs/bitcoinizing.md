# Bitcoinizing Arcade City

Thoughts on Bitcoin/Lightning integration.

See the [main README](https://github.com/ArcadeCity/arcade/blob/main/README.md) for our project overview.

#### Features we want to include

- Stream sats to service providers (eg. rideshare drivers)
- Passwordless email or social auth via [Magic](https://magic.link/)
- Every user is identified by a public key and a playertag.
- Playertags are also [Lightning Addresses](https://lightningaddress.com/) (@arcade.city or user-provided)
- Pay anyone via Lightning Address or invoice
- Semi-custodial Lightning wallet via our [Arcade relay](https://github.com/ArcadeCity/arcade/tree/main/packages/relay) incorporating [LNDHub](https://bluewallet.io/lndhub/)
- Option to connect your own wallet
- Option to run your own relay node
- Profiles at arcade.city/[playertag]
- Chat interoperability with [Sphinx](https://sphinx.chat/) & [Zion](https://getzion.com/)
- Earn sats for microtasks like tweeting about us, completing Bitcoin education, or user-defined microtasks
- Earn sats for commission on referrals
- 100% open-source

#### Features we don't want to include

- Passwords
- Fully custodial wallet
- Shitcoins

#### Arcade Relay Node features:

- Run a Bitcoin full node or connect to external node
- Run an LND node or connect to external node
- Peer-to-peer data sharing via [Hypercore](https://hypercore-protocol.org/)
- Collect fees on Lightning transactions and maybe [data storage](https://fiatjaf.com/5b2a2772.html)
- Communicate with other Arcade/Sphinx/Zion nodes for chat

#### Things we like from other projects:

- [Zebedee](https://zebedee.io/)
  - Login with social/email
  - Every account has a Lightning Address
  - Profile pages with Lightning addresses
  - Gorgeous UX, wallets, blog
- [BlueWallet](https://bluewallet.io/)
  - LNDHub - multitenant Bitcoin/Lightning wallet
- [Nostr](https://github.com/fiatjaf/nostr)
  - Client/relay model and maybe the NIPs
- [BTCPayServer](https://btcpayserver.org/)
  - Merchant tools
- [Sphinx](https://sphinx.chat/)/[Zion](https://getzion.com/)
  - Adds chat on top of Lightning
  - Potential for chat interoperability between Lightning projects
- [Lightning.Page](https://lightning.page/)
  - [Desktop wizard](https://github.com/shocknet/Wizard) to launch a node
- [Diagon Alley](https://www.youtube.com/watch?v=GeaFTblOmNA)
  - Censorship-resistant market stalls / storefronts
- [Impervious](https://www.impervious.ai/)
  - Layer 3 infrastructure for VPNs, messaging, federation
- [Fountain](https://www.fountain.fm/)
  - Gorgeous UX
  - Premium $2.99/mo IAP
- [Stacker News](https://stacker.news/)
  - Login with Lightning/social/email
- [CTZN](https://github.com/bluelinklabs/ctzn)
  - Hypercore P2P database
- [Etleneum](https://etleneum.com/)/[RGB](https://www.rgbfaq.com/)/[OmniBolt](https://omnilab.online/omnibolt/) (?)
  - Smart contracts on Lightning

#### Feedback, ideas, insults?

Please [email](mailto:cityhall@arcade.city) or [tweet at us](https://twitter.com/ArcadeCityHall)
