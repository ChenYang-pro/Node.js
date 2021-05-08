
// module.exports 可以以对象或者.XX的形式暴露出数据，exports只能单个暴露(export.XX)
// 原因：module.exports修改的是module.exports属性，exports修改的是exports对象，exports=module.exports

// exports.name = 'Jack'
// exports.age = '28'
// exports.sayName = function () {
//     console.log('I\'m Jack, 28')
// }

module.exports = {
    name: 'Jack',
    age: '28',
    sayName: function () {
        console.log('I\'m Jack, 28')
    }
}
