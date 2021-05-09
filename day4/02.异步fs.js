
// 异步文件写入 

var fs = require("fs")

// 异步打开没有直接的返回值，通过回调函数返回。

// 回调函数有两个参数：err 错误， fd

// fs.open(path,mode,callback) 打开文件
fs.open("hello2.txt","w",function(err, fd){
    if(!err) {
    // fs.write(fd,string,callback) 写入文件
    fs.write(fd,"Hello, Node! (From async)",function(err){
        if(!err) {
            console.log("写入成功")
        }
        // fs.close(fd,callback) 关闭文件
        fs.close(fd, function(err){
            if(!err) {
                console.log("文件已关闭")
            }
        })
    })
    } else {
        console.log(err)
    }
})