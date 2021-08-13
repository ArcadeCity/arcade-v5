const path = require('path')

const { createMetroConfiguration } = require('expo-yarn-workspaces')
const { getDefaultConfig } = require('expo/metro-config')

// const config = getDefaultConfig(path.resolve(__dirname, '../../'))
const config = createMetroConfiguration(path.resolve(__dirname, '../../'))

module.exports = (async () => {
  const {
    resolver: { sourceExts },
  } = await getDefaultConfig()

  return {
    watchFolders: [path.resolve(__dirname, '../../')],
    transformer: {
      // babelTransformerPath: require.resolve("react-native-svg-transformer"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      ...configuration.resolver,
      assetExts: configuration.resolver.assetExts.filter(
        (ext) => ext !== 'svg'
      ),
      sourceExts: [...sourceExts, 'svg'],
      // NOTE: using native entrypoint because bug in metro https://github.com/facebook/metro/issues/485
      resolverMainFields: ['native', 'module', 'browser', 'main'],
    },
  }
})()

// config.watchFolders = [path.resolve(__dirname, '../../')]
// config.transformer.assetPlugins = ['expo-asset/tools/hashAssetFiles']
// config.transformer.getTransformOptions = async () => ({
//   transform: {
//     experimentalImportSupport: false,
//     inlineRequires: true,
//   },
// })
// config.resolver.assetExts.push('fbx', 'glb', 'obj')
// config.resolver.sourceExts.push('cjs', 'properties', 'expo.js')

module.exports = config
