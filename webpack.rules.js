module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|public\/)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  },
  {
    test: /\.css$/i,
    exclude: [/node_modules/],
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.s[ac]ss$/i,
    exclude: [/node_modules/],
    use: ['style-loader', 'css-loader', 'sass-loader'],
  },
];
