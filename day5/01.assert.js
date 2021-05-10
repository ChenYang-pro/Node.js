const assert = require('assert').strict;

function add(a,b) {
    return a+b
}

// assert 和 assert.ok() 同
assert(add(1,2)===4,"add加法错误")