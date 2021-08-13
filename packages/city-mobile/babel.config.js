module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['../components/src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.stories.tsx',
        ],
        alias: {
          app: './src/app',
          i18n: '../components/src/i18n',
          lib: './src/lib',
          navigation: './src/navigation',
          services: './src/services',
          stores: './src/stores',
          storybook: './storybook',
          views: './src/views',
        },
      },
    ],
  ],
}
