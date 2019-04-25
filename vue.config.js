const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const pkg = require('./package.json')

const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  configureWebpack: {
    plugins: isProd ? [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        server: {
          port: pkg.renderPort
        },
        routes: [
          '/',
          '/about',
          '/contact'
        ],
        renderAfterTime: 5000,
        renderer: new Renderer({
          headless: false
        })
      })
    ] : []
  }
}
