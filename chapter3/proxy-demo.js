//handler.has
const p = new Proxy({},{
    has(target,prop){
        console.log(`checking "${prop}" is in the target or not`)
        return true
    }
})

console.log('foo' in p)
//handler.get

const obj = new Proxy({}, {
    get : function( target , prop ) {
        console.log("get")
        return target[prop]
    },
    set : function( target, prop, value) {
        console.log("set")
        target[prop] = value
    }
});
obj.info

//handler.apply 监听函数调用行为
const sum = function(...args){
    return args
        .map(Number)
        .filter(Boolean)
        .reduce((a,b) => a + b)
}

const p2 = new Proxy(sum,{
    apply(target,thisArg,args){
        console.log(`Function is being called with arguments [${args.join()}] and context ${thisArg}`)
        return target.call(thisArg,...args)
    }
})

console.log(p2(1,2,3))

//handler.construct
class Foo {}

const p3 = new Proxy(Foo,{
    construct(target,args,newTarget){
        return {arguments:args}//必须返回对象
    }
})
const obj2 = new p3(1,2,3)
console.log(obj2.arguments)