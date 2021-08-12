module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'module-resolver',
    {
      alias: {
        app: './src/app',
        components: './src/components',
        i18n: './src/i18n',
        lib: './src/lib',
        navigation: './src/navigation',
        services: './src/services',
        stores: './src/stores',
        storybook: './storybook',
        views: './src/views',
      },
    },
  ],
}
