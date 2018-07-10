//箭头函数

//1 (单一参数单行箭头)
let arr = ['a','bc','dfgr','e'];
arr = arr.filter(item => item.length > 1);
console.log('1:' + arr);

//2（多参数单行箭头）
let arr2 = ['a','bc','dfgr','edm'];
arr2 = arr2.sort((a,b) => a.length < b.length);
console.log('2:' + arr2);
//sort()方法 参数可选 sort(compareFunction(a,b))

//3 多行箭头

//4无参数箭头函数,
//()表示空的参数列表

const name =() => 'zhanganlun';
console.log(name);

//Q:遍历数组内每个元素使其加1

let arr3 = [1,2,3,4,5];
arr3.map(item => item+1);
console.log(arr3);//原数组不变 因为map生成了新的数组，不对原数组进行操作
let res = arr3.map(item => item+1);
console.log(res);//[2,3,4,5,6]

//实例
const names = ['zhang','yao','liu','li','zhu','chen'];

const newSet = names.map((name,index) => ({
    id:index,
    name:name
}))
    .filter(man => man.id %2 ==0)
    .map(man => [man.name])
// console.log(newSet);
    .reduce((a,b) => a.concat(b))
console.log(newSet);

