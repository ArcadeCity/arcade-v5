const monorepoResolver = require('./babel.resolver')
const { root, alias } = monorepoResolver({
  path: '../path-to/monorepo-project',
  modules: [
    'subpath-to/module-1',
    'subpath-to/module-2',
    // ...etc
  ],
})

const moduleResolverConfig = {
  root,
  alias: {
    ...alias,
    // additional aliases
  },
}

module.exports = function (api) {
  api.cache(true)

  const presets = ['module:metro-react-native-babel-preset']

  const plugins = [['module-resolver', moduleResolverConfig]]

  return { presets, plugins }
}
