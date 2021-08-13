const path = require('path')
const monorepoResolver = require('./babel.resolver')
const { root, alias } = monorepoResolver({
  path: '.',
  modules: [
    'i18n1234', // packages/components/src/
    // 'subpath-to/module-2',
    // ...etc
  ],
})

const moduleResolverConfig = {
  root,
  alias: {
    ...alias,
    i18n: path.resolve(__dirname, 'packages/components/src/i18n'), //'packages/components/src/i18n',
    // additional aliases
  },
}

console.log('moduleResolverConfig:', moduleResolverConfig)

module.exports = function (api) {
  api.cache(true)

  const presets = ['module:metro-react-native-babel-preset']

  const plugins = [['module-resolver', moduleResolverConfig]]

  return { presets, plugins }
}
