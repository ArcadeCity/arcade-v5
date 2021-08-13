const path = require('path')

module.exports = {
  watchFolders: [path.resolve(__dirname, '../../')],
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
}
