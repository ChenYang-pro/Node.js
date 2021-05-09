
// 同步、异步、简单文件写入不适合大文件写入，性能较差，容易导致内存溢出

var fs = require("fs")

// 流式文件写入

// 创建一个可写流 fs.createWriteStream(path[, options])

var ws = fs.createWriteStream("hello4.txt")

ws.write("hello ")
ws.write("node ")
ws.write("from ")
ws.write("createWriteStream() ")

// 开启/关闭流：通过on监听

ws.once("open",function(){
    console.log("ws 已经开启")
})

ws.once("close",function(){
    console.log("ws 已经关闭")
})

ws.end()