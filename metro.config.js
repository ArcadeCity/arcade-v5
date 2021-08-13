const structure = {
  path: './',
  modules: ['packages/components'],
}
const monorepoResolver = require('./metro.resolver')
const { extraNodeModules, watchFolders } = monorepoResolver(structure)

console.log('extraNodeModules:', extraNodeModules)
console.log('watchFolders:', watchFolders)

module.exports = {
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

// module.exports = {
//   resolver: {
//     extraNodeModules: {
//       ...extraNodeModules,
//       // any other node modules if needed
//     },
//   },
//   watchFolders: [
//     ...watchFolders,
//     // any other watch folders if needed
//   ],
// }
