//  FS 文件系统： Node用于操作系统中的文件，属于核心模块，直接通过名称引入

// FS所有方法包括同步和异步  异步有回调

var fs = require("fs")

// console.log(fs)

// 同步文件写入

// fs.openSync(path,flags,mode) 打开文件
var fd = fs.openSync(".//hello.txt", 'w')

// fs.writeSynv(fs,string) 写入文件
fs.writeSync(fd,"hello, node!")

// fs.closeSync() 关闭文件 
fs.closeSync(fd)
