//闭包延长变量作用周期

// (function () {
//     var foo = '22';
// })();
//
// console.log(foo); //error:foo is not defined

function f1() {
    const va = '222';
    return va;
}
const f2 = f1();
console.log(f2);



