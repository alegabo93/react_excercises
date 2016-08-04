module.exports = {
  entry: [
    './app/Components/App.js'
  ],
  output: {
    path: './public/',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  }
};
