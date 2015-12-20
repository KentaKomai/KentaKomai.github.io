
module.exports = {
  entry: './assets/sources/es6/main.babel.js',
  output: {
    path:__dirname + '/assets/sources/assets/dist/javascript',
    filename: 'bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }

}
