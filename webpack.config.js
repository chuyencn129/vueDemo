module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'vue-template-loader',

        // We don't want to pass `src/index.html` file to this loader.
        exclude: /index.html/,
        options: {
          transformToRequire: {
            img: 'src'
          }
        }
      }
    ]
  }
}