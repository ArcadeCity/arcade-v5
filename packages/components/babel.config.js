module.exports = function (api) {
  console.log('HERE?')
  api.cache(true)
  return {
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          root: ['./src'],
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
    ],
  }
}
