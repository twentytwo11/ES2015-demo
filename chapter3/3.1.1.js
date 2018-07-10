// 循环体内变量定义使用let ，可以使每一次循环都保留当前所定义变量的数值和引用
// 类似的，for语句，do{},while(){},switch (){}..

const arr1 = [];
for(var i = 0; i<3;++i){
    arr1.push(() => i);
}
const arr2 = arr1.map(x => x());

const arr3 = [];
for(let i = 0; i<3;++i){
    arr3.push(() => i);
}
const arr4 = arr3.map(x => x());


console.log('a' + arr2.join(','));
console.log('b' + arr4.join(','));

