module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        // root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.d.ts',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@assets': './src/assets',
          '@api': './src/api',
          '@constants': './src/constants',
          '@query': './src/query',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
          '@features': './src/features',
          '@atom': './src/atom',
          '@utils': './src/utils',
          '@type': './types',
        },
      },
    ],
  ],
};
