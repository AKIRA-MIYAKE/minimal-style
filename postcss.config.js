module.exports = {
  'map': { inline: false },
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
        }
      }
    }),
    require('mdcss')({
      examples: {
        css: ["../dist/minimal-style.css"]
      }
    })
  ]
}
