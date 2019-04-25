var { spawn } = require('child_process')
var express = require('express')
var proxyMiddleware = require('http-proxy-middleware')
var pkg = require('./package.json')
var app = express()

function makeProxy (renderPort) {
  var options = {
    target: `http://localhost:${renderPort}`,
    changeOrigin: true
  }
  app.use(proxyMiddleware('/', options))
  app.listen(80)
}

makeProxy(pkg.renderPort)

process.env.FORCE_COLOR = true
const [str0, ...rest] = process.argv[2].split(/\s/)
const cmd = spawn(str0, rest, { env: process.env })
cmd.stdout.on('data', function (data) {
  process.stdout.write(data)
})

cmd.stderr.on('data', function (data) {
  process.stderr.write(data)
})

cmd.on('exit', function (code) {
  process.exit(0)
})
