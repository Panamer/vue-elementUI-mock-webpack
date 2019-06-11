# vue-mock-elementUI-webpack

> vue with node

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev/start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


#配置mock

#模块化引入mock.js   在dev-server里加    app.use('/api', require('../src/mock.js'))

#src目录下有个mock.js 生成模拟数据

#可以直接访问localhost:8090/api/data  查看接口数据，因为是用express起的服务路由也是express.router,所以mock的服务同项目本地服务地址

加
