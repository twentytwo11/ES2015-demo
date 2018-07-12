//generator

function* genFn() {
    let a = 2
    yield a
    while(true){
        yield a = a / (2*a+1)
    }
}
//执行生成器函数会返回一个生成器对象
//生成器自身是一个可迭代对象 利用for...of语句输出生成器结果
const gen = genFn()
for(const a of gen){
    if(a < 1/100) break
    console.log(a)
}


