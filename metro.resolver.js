/**
 * Metro monorepo resolver function
 * More details: https://facebook.github.io/metro/docs/en/configuration
 * Make sure to install monorepo project dependencies and current project dependencies
 *
 * ```
 * npm i && (cd ./path-to/monorepo-project && npm i)
 * ```
 *
 * Usage (in metro.config.js):
 *
 * ```
 * const monorepoResolver = require('./metro.resolver');
 *
 * const { extraNodeModules, watchFolders } = monorepoResolver({
 *   path: 'path-to/monorepo-project',
 *   modules: [
 *     'path-to/module-1',
 *     'path-to/module-2',
 *     // etc
 *   ],
 * });
 *
 * module.exports = {
 *   resolver: {
 *     extraNodeModules: {
 *       ...extraNodeModules,
 *       // additional modules
 *     }
 *   },
 *   watchFolders: [
 *     ...watchFolders,
 *     // additional watch folders
 *   ]
 * };
 * ```
 */

const path = require('path')

const appDependenciesPath = path.resolve('./node_modules')

const getModuleConfig = (modulePath) => {
  const packageJsonPath = path.resolve(modulePath, 'package.json')
  return require(packageJsonPath)
}

const getModuleDependencies = (config, name) => {
  if (config[name]) {
    return Object.keys(config[name])
  }
  return []
}

const createResolver = (dependencies, basePath) => {
  return dependencies.reduce((acc, dep) => {
    return {
      ...acc,
      [dep]: path.resolve(basePath, dep),
    }
  }, {})
}

const createWatchFolders = (dependencies, basePath) => {
  return dependencies.map((dep) => {
    return path.resolve(basePath, dep)
  })
}

module.exports = function (structure) {
  const frameworkPath = path.resolve(__dirname, structure.path)
  // console.log('frameworkPath:', frameworkPath)
  const frameworkDependenciesPath = path.resolve(frameworkPath, 'node_modules')
  // console.log('frameworkDependenciesPath:', frameworkDependenciesPath)

  const extraNodeModules = structure.modules.reduce((acc, frameworkModule) => {
    const moduleConfig = getModuleConfig(
      path.resolve(frameworkPath, frameworkModule)
    )

    const moduleDependencies = getModuleDependencies(
      moduleConfig,
      'dependencies'
    )
    const modulePeerDependencies = getModuleDependencies(
      moduleConfig,
      'peerDependencies'
    )

    return {
      ...acc,
      ...createResolver(moduleDependencies, frameworkDependenciesPath),
      ...createResolver(modulePeerDependencies, appDependenciesPath),
    }
  }, {})

  const watchFolders = structure.modules.reduce((acc, frameworkModule) => {
    const moduleConfig = getModuleConfig(
      path.resolve(frameworkPath, frameworkModule)
    )
    const moduleDependencies = getModuleDependencies(
      moduleConfig,
      'dependencies'
    )

    return [
      ...acc,
      ...createWatchFolders(moduleDependencies, frameworkDependenciesPath),
      path.resolve(structure.path, frameworkModule),
      // path.resolve('../../' + structure.path, frameworkModule),
    ]
  }, [])

  return {
    extraNodeModules,
    watchFolders,
  }
}
