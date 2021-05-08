// package是CommonJS包规范通过将多个模块组合而成的。包括包结构和包描述，其中包描述中的(package.json)是必须的。

// NPM是CommonJS包规范的实践，完成第三方包的发布、安装和依赖。

// npm -V  npm  npm search npm install  npm install 包名-g

const math = require('math')

console.log(math.add(123,355))