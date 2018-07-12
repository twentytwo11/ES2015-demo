//检验对象为一个生成器函数or一个生成器实例

//检验生成器函数
function isGeneratorFunction(fn) {
    const genFn = (function* () {}).constructor
    return fn instanceof genFn
}

function* genFn() {
    let a = 2

    yield a
    while(true){
        yield a = a / (a * 2 + 1)
    }
}

console.log(isGeneratorFunction(genFn)) //true


