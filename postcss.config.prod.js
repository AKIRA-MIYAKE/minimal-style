module.exports = {
  'no-map': true,
  'plugins': [
    require('postcss-import')(),
    require('postcss-url')(),
    require('postcss-extend')(),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          preserve: "computed"
        },
        customMedia: {
          appendExtensions: true
        },
        autoprefixer: false
      }
    }),
    require('cssnano')()
  ]
}
