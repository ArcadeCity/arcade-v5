module.exports = {
  presets: ['next/babel'],
  plugins: [
    'glsl',
    ['react-native-web', { commonjs: true }],
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
          app: '../components/src/app',
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
