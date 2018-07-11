//剩余参数

//1.转换arguments为数组格式(ES5）

function fn1() {
    var args = [].slice.call(arguments)

    console.log(args)
    console.log(args.filter(function (t) {
        return t > 0
    }))

}

fn1(1,2,3,4,5);
fn1(-1,-2,0,1,2);

//（ES6）
function fn2() {
    console.log(Array.from(arguments))
}

fn2(1,2,3);

function fn3(foo,...rest) {
    console.log(`foo:${foo}`)
    console.log((`rest args:${rest.join(',')}`))
}

fn3(1,3,5,7);

//2.应用场景 eg:合并对象

function merge(target = {},...objs) {
    for (const obj of objs){
        const keys = Object.keys(obj)

        for(const key of keys){
            target[key] = obj[key]
        }
    }

    return target
}

console.log(merge({a:1},{b:2},{c:3}))
