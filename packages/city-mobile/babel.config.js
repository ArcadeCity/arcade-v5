module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          root: ['../components/src'],
          alias: {
            app: '../components/src/app',
            components: '../components/src/components',
            i18n: '../components/src/i18n',
            lib: '../components/src/lib',
            navigation: '../components/src/navigation',
            services: '../components/src/services',
            stores: '../components/src/stores',
            storybook: '../components/storybook',
            views: '../components/src/views',
          },
        },
      ],
    ],
  }
}
