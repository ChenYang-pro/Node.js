// Buffer(缓冲区) 解决数组性能差, 无法存储2进制数据的问题. Buffer使用不需要引入模块
// Buffer存储的都是二进制数据,但是以16进制显示 每个元素的范围从 00 - ff  0-255 从后往前取8位

// 计算机中的一个0或1 称为 1位(bit)
// 8bit = 1字节(byte)
// 1个汉字3字节
// 1kb = 1024byte
// 对底层的内存操作,一旦创建,不能修改大小

var str = 'Hello Buffer'

 var buf = Buffer.from(str)

 console.log(buf.length) //获取占用内存大小

//  创建指定大小的Buffer
var buf2 = new Buffer(10) //不建议使用
console.log(buf2.length)

// Buffer.alloc 
var buf3 = Buffer.alloc(10)
console.log(buf3.length)

// Buffer.allocUnsafe() 创建指定大小Buffer,但可能有敏感数据(未清空)
var buf4 = Buffer.allocUnsafe(10)
console.log(buf4)