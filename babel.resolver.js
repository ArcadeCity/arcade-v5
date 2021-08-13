/**
 * Babel monorepo resolver function
 * More details: https://babeljs.io/docs/en/configuration#babelconfigjs
 * Make sure to install monorepo project dependencies and current project dependencies
 *
 * ```
 * npm i && (cd ./path-to/monorepo-project && npm i)
 * ```
 *
 * Also you have to install `babel-plugin-module-resolver`
 * ```
 * npm i -D babel-plugin-module-resolver
 * ```
 *
 * Usage (in babel.config.js):
 *
 * ```
 * const monorepoResolver = require('./babel.resolver');
 *
 * const { root, alias } = monorepoResolver({
 *   path: 'path-to/monorepo-project',
 *   modules: [
 *     'path-to/module-1',
 *     'path-to/module-2',
 *     ...
 *   ],
 * });
 *
 * const moduleResolverConfig = {
 *   root,
 *   alias: {
 *     ...alias,
 *     // additional aliases
 *   },
 * };
 *
 * module.exports = function (api) {
 *   api.cache(true);
 *
 *   const presets = [
 *     'module:metro-react-native-babel-preset',
 *   ];
 *
 *   const plugins = [
 *     ['module-resolver', moduleResolverConfig],
 *   ];
 *
 *   return { presets, plugins };
 * };
 * ```
 */

const path = require('path')

module.exports = (structure) => {
  const frameworkPath = path.resolve(__dirname, structure.path)

  const alias = structure.modules.reduce((acc, frameworkModule) => {
    const frameworkModulePath = path.resolve(frameworkPath, frameworkModule)
    const frameworkModuleConfig = path.resolve(
      frameworkModulePath,
      'package.json'
    )

    return { ...acc, [frameworkModuleConfig.name]: frameworkModulePath }
  }, {})

  return {
    root: path.resolve('./'),
    alias,
  }
}
