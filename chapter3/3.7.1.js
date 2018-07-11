//set 有序集合
//集合的所有操作通过集合对象来实现

//增
const set = new Set()

set.add(1)
    .add(2)
    .add(3)
    .add(3)//不会重复增加

console.log(set);//Set{1,2,3}

//删
set.delete(2)

console.log(set)

//清空
set.clear()
console.log(set)

//查

const set1 = new Set([1,2,3,4,5])

console.log(set1.has(2))
console.log(set1.has(6))

//遍历
const set2 = new Set([1,2,3])

set2.forEach(item => {
    console.log(item)
})

set2.forEach(item => {
    console.log(item * this.foo)
},{foo:2})
//forEach 不可中断 ES6 提出Symbol.iterator,结合for..of使用

const set3 = new Set([1,2,3])

for(const val of set3){
    console.log(val)
}