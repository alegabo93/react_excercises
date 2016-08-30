module.exports = {
  entry: [
    './app/ContactApp/App.js'
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
