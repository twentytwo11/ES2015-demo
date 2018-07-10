//for..of 代替 for..in循环语句
//let const块级作用域 for循环中每个当前值仅保留于对应循环体中

const arr = [1,2,3];
for(const i of arr){
    console.log(i);
}

//处理json数据

const StaffInfo =[
    {name:'Liuwei',gender:1,school:'Xian electronic university'},
    {name:'Yaoyuchen',gender:1,school:'Xiamen university'},
    {name:'Zhanganlun',gender:1,school:'Shanghai niversity'}
]

for(const {name,school} of StaffInfo){
    console.log('i am ' + name + ' and i graduated from ' + school);
}

//es6 数组方法 entries()的使用

const arr2 = ['a','b','c'];
console.log(arr2.entries());
//输出空对象

console.log(arr2.entries().next());
//{ value: [ 0, 'a' ], done: false } done:表示迭代是否完成
//结合for.. of 方法

for(const[index, {name,school}] of StaffInfo.entries()){
    console.log(index + 'i am ' + name + ' and i graduated from ' + school);
}

