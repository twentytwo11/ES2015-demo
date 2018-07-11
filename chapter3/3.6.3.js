//解构传参
//使用数组作为参数，不会替换函数调用中的上下文

function sum(...numbers) {
    return numbers.reduce((a,b) => a+b)
}

console.log(sum(...[1,2,3]));
