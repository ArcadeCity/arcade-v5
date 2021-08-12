module.exports = function (api) {
  api.cache(true)
  return {
    plugins: [
      [
        'module-resolver',
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
            stores: './src/stores',
            storybook: './storybook',
            views: './src/views',
          },
        },
      ],
    ],
  }
}
