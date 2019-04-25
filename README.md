# prerender-cdn-vue-demo

> A Vue.js project run with prerender-spa-plugin and cdn public path based on vue-cli 3.0.

（vue-cli 2.0 demo: https://github.com/dunhuang/prerender-cdn-vue-demo/tree/vue-cli-2.0）



## Before Build

add your cdn host to local machine's `/etc/hosts`:
```
127.0.0.1 www.cdn.com
```

edit .env.cdn:
```
NODE_ENV=production
PUBLIC_PATH=//www.cdn.com/
```

add renderPort to package.json (or other config files which can exports constants):
```
  //...
  "renderPort": 13010
  //...
```
Stop any local server which is listening 80.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build

# build for production with cdn host
npm run build:cdn
```
