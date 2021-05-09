
// 简单文件写入 
//fs.writeFile(file, data[, options], callback)
// fs.writeFileSync(file, data[, options])

// w 覆盖写入
// a 继续写入
// r 读 r+ 读写

var fs = require("fs")

fs.writeFile("hello3.txt","hello, Node! from writeFile()", function(err){
    if(!err) {
        console.log("成功")
    }
})