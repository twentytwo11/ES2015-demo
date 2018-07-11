//WeakSet

const weakset = new WeakSet()
let foo = {bar:1}

weakset.add(foo)
console.log(weakset.has(foo))

foo = null
console.log(weakset.has(foo))
//weakset无法包含无引用的对象 加入后会被自动清除

const weakset2 = new WeakSet()
let str = new String('zhanganlun')
weakset2.add(str)
console.log(weakset2.has(str))//强制判断值类型为引用类型

str = str + '22222';
console.log(weakset2.has(str))//false 修改后失去引用 被清除