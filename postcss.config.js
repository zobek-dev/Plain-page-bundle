module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-nested-ancestors'), 
    require('cssnano')
  ]
}