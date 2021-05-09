// fs.createReadStream(path[, options]) 流式文件读取

const fs = require("fs")

var rs = fs.createReadStream("day4/hello2.txt")

var ws = fs.createWriteStream("day4/hello6.txt") 

rs.once("open", function(){
    console.log("可读流打开！")
})

rs.once("close", function(){
    console.log("可读流关闭了！")
})

ws.once("open", function(){
    console.log("可写流打开！")
})

ws.once("close", function(){
    console.log("可写流关闭了！")
})

// 读取数据
// rs.on("data", function(data) {
//     console.log(data.toString())
//     ws.write(data)
//     ws.end()
// })

// 优化 rs.pipe() 直接将可读流内容输出到可写流中

var ws1 = fs.createWriteStream("day4/hello7.txt") 

ws1.once("open", function(){
    console.log("可写流1打开！")
})

ws1.once("close", function(){
    console.log("可写流1关闭了！")
})

rs.pipe(ws1)