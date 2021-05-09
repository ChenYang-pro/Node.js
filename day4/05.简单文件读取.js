
// 同步/异步文件读取
// 简单文件读取 fs.readFile(path[, options], callback)
// 流式文件读取 

var fs = require("fs")

//  fs.readFile(path[, options], callback) 异步
fs.readFile("day4/hello2.txt", function(err, data) {
    if(!err){
        console.log(data.toString())
        // 写入data
        fs.writeFile("day4/hello5.txt",data,function(err){
            if(!err) {
                console.log("写入成功")
            }
        })
    }
})

