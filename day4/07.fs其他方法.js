
var fs = require("fs")

// fs.existsSync(path) -检查文件是否存在
// console.log(fs.existsSync("day4/hello.txt"))

// fs.stat(path[, options], callback)
// fs.statSync(path[, options])  -查看文件状态
// console.log(fs.statSync("day4/hello.txt"))


// fs.unlink(path, callback)
// fs.unlinkSync(path)  删除文件
// console.log(fs.unlinkSync("day4/hello7.txt"))

// fs.readdir(path[, options], callback)
// fs.readdirSync(path[, options]) 列出一个目录的结构
// fs.readdir(".",function(err,files){
//     if(!err){
//         console.log(files)
//     }
// })

// fs.truncate(path[, len], callback)
// fs.truncateSync(path[, len]) 截断文件，将文件修改为指定大小
// fs.truncateSync("day4\\hello5.txt",1)

// fs.mkdir(path[, options], callback)
// fs.mkdirSync(path[, options]) 创建文件夹
// fs.mkdirSync("day4/hello")

// fs.rmdir(path[, options], callback)
// fs.rmdirSync(path[, options]) 删除文件夹
// fs.rmdirSync("day4/hello")

// fs.rename(oldPath, newPath, callback)
// fs.renameSync(oldPath, newPath)  重命名
// fs.renameSync("day4/hello","day4/Node")

// fs.watchFile(filename[, options], listener) 监视文件修改
fs.watchFile("day4/hello5.txt",function(){
    console.log("文件发生变化了~~~")
})