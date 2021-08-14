const path = require('path')
const structure = {
  path: './',
  modules: ['packages/components'],
}
const monorepoResolver = require('./metro.resolver')
const { extraNodeModules, watchFolders } = monorepoResolver(structure)
const { getDefaultConfig } = require('@expo/metro-config')

const config = getDefaultConfig(path.resolve('../../', __dirname))
// console.log('config:', config)

config.resolver.assetExts.push('fbx', 'glb', 'obj', 'ttf')

// console.log('extraNodeModules:', extraNodeModules)
// console.log('watchFolders:', watchFolders)

const blam = {
  ...config,
  resolver: {
    extraNodeModules: {
      ...extraNodeModules,
      // any other node modules if needed
    },
  },
  watchFolders: [
    ...watchFolders,
    // any other watch folders if needed
  ],
}

// console.log(blam)

module.exports = blam
