# prerender-cdn-vue-demo

> A Vue.js project run with prerender-spa-plugin and cdn public path.

## Before Build

add your cdn host to local machine's `/etc/hosts`:
```
127.0.0.1 www.cdn.com
```

set renderPort and assetsPublicPath in config/index.js
```
  build:{
    //...
    assetsPublicPath: '//www.cdn.com/',
    renderPort: 13010,
    //...
  }
```
Stop any local server which is listening 80.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
