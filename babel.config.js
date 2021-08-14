const path = require('path')
const monorepoResolver = require('./babel.resolver')
const { root, alias } = monorepoResolver({
  path: '.',
  modules: [
    // 'i18n1234', // packages/components/src/
    // 'subpath-to/module-2',
    // ...etc
  ],
})

const moduleResolverConfig = {
  root,
  alias: {
    ...alias,
    components: path.resolve(__dirname, 'packages/components/src/components'),
    i18n: path.resolve(__dirname, 'packages/components/src/i18n'),
    lib: path.resolve(__dirname, 'packages/components/src/lib'),
    navigation: path.resolve(__dirname, 'packages/components/src/navigation'),
    services: path.resolve(__dirname, 'packages/components/src/services'),
    stores: path.resolve(__dirname, 'packages/components/src/stores'),
    views: path.resolve(__dirname, 'packages/components/src/views'),
  },
}

console.log('moduleResolverConfig:', moduleResolverConfig)

module.exports = function (api) {
  api.cache(true)

  const presets = ['module:metro-react-native-babel-preset']

  const plugins = [['module-resolver', moduleResolverConfig]]

  return { presets, plugins }
}
