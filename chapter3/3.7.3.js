//map映射
const map = new Map()
//增

map.set('foo','hello')
map.set('bar','zhang')
map.set('bar','anlun')

console.log(map)//bar => anlun

//删
map.delete('foo')

console.log(map)

//清空
map.clear()
console.log(map)

//获取键值对
const map2 = new Map()
map2.set('foo','bar')
console.log(map2.get('foo'))//bar

//检查
const map3 = new Map()
map3.set('ann',1)
console.log(map3.has('ann'))
console.log(map3.has('bar'))

