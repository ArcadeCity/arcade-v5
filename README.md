# Arcade

We are open-sourcing our active codebases and consolidating into one monorepo.

## What

**Now:** Arcade City, a peer-to-peer services app for [Android](https://play.google.com/store/apps/details?id=arcade.city.mobile) and [iOS](https://apps.apple.com/us/app/arcade-city/id1082799882).

**Soon:** The Arcade, an open peer-to-peer services ecosystem on Bitcoin.

## Why

Transportation, deliveries, housing, food, finance, energy, infrastructure, governance: all can and should be provided peer-to-peer with no government involvement.

Governments are broken. All people deserve to exit broken systems. We are building a destination they can exit to. [[Blog post](https://arcade.city/blog/antidote)]

## How

We bootstrap the peer-to-peer services economy by first delivering [decentralized Uber](https://twitter.com/ArcadeCityHall/status/1388669130413334528).

Our [flagship Austin network](https://arcade.city/files/ArcadeCity_FinalReport.pdf) has [proven](https://twitter.com/ArcadeCityHall/status/1351630501946253312) that rideshare cooperatives can replace corporations. The task now is to scale this model globally by empowering and connecting [platform cooperatives](https://wiki.p2pfoundation.net/Platform_Cooperativism) all over the world.

We believe networks of cooperatives with the right tools and incentives can replace corporations and even governments.


## Packages
- **city-mobile** - v5.1 mobile app
- **city-web** - Lightweight web app with subset of mobile functionality
- **components** - Shared components
- **core** - Shared functionality
- **explorer** - Arcade transaction explorer
- **wallet-web** - Experimental wallet supporting Bitcoin Lightning, USDC and Arcade Tokens

## Tech stack
- [React](https://github.com/facebook/react)
- [React Native](https://github.com/facebook/react-native)
- [React Native Web](https://github.com/necolas/react-native-web)
- [Create React App](https://github.com/facebook/create-react-app)
- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) *(Monorepo)*
- [Storybook](https://storybook.js.org/) *(Component library)*
- [MobX State Tree](https://github.com/mobxjs/mobx-state-tree) *(State management)*
- [Magic](https://magic.link/) *(Authentication)*
- [Ceramic](https://ceramic.network/) *(Data storage)*
- [LND](https://github.com/lightningnetwork/lnd) via [LNDHub](https://github.com/BlueWallet/LndHub) *(Bitcoin Lightning integration)*
- [solana-web3.js](https://github.com/solana-labs/solana-web3.js/) *(USDC & ARCD integration)*

## Contributing
We welcome contributions. Please email cityhall@arcade.city with how you'd like to help.


## Inspiration

See [wiki page](https://github.com/ArcadeCity/arcade/wiki/Inspiration).
