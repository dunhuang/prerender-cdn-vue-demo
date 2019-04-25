var connect = require('express')
var proxyMiddleware = require('http-proxy-middleware')

var app = connect()


function makeProxy(renderPort){
  
  var options = {
    target: `http://localhost:${renderPort}`, 
    changeOrigin: true, 
  }
  var proxy = proxyMiddleware('/', options)
  app.use(proxy)
  app.listen(80)
}

module.exports = makeProxy