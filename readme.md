项目参考地址：https://snipcart.com/blog/next-js-ecommerce-tutorial

## 搭建环境

`npm init -y`

`npm install --save react @types/react react-dom @types/react-dom next @types/next @zeit/next-typescript @zeit/next-sass node-sass`

`npm install --save-dev typescript`

## next.config.js

```js
const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
module.exports = withTypescript(withSass());
```

## .babelrc.js

```js
module.exports = {
  presets: ["next/babel", "@zeit/next-typescript/babel"]
};
```

## package.json

```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

## 创建页面

Header Footer Product ProductList Index

## 运行

npm run dev

localhost:3000

## 提取数据并导入组件

next.js 提供的生命周期方法 getInitialProps

getInitialProps：异步方法，将任何可解析的内容返回到 js 中的 object

## 导入 Snipcart

购物车开发，托管服务器

学习中，未掌握：https://docs.snipcart.com/v3/ 18838166792@163.com mhj1314yjg

## 部署应用

使用服务器端渲染方法

Heroku：将我们的应用程序服务器端渲染在 Heroku 服务器上运行。

Heroku 账户申请未成功
