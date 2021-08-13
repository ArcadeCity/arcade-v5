const path = require('path')

const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)

config.watchFolders = [path.resolve(__dirname, '../../')]
config.transformer.assetPlugins = ['expo-asset/tools/hashAssetFiles']
config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
})
config.resolver.assetExts.push('fbx', 'glb', 'obj')
config.resolver.sourceExts.push('cjs', 'properties', 'expo.js')

module.exports = config
