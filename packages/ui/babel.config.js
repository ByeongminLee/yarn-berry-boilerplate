module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-transform-react-jsx'],
  overrides: [
    {
      test: /\.jsx?$/,
      plugins: ['@babel/plugin-transform-react-jsx'],
    },
  ],
};
