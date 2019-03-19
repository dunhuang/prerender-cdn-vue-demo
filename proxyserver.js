var connect = require('connect')
var vhost = require('vhost')
var app = connect()
var proxyMiddleware = require('http-proxy-middleware')

function makeProxy(cdnHost, renderPort){
  
  var options = {
    target: `http://localhost:${renderPort}`, 
    changeOrigin: true, 
  }
  var proxy = proxyMiddleware(options)

  app.use(vhost(cdnHost, proxy))
  app.listen(80)
}

module.exports = makeProxy