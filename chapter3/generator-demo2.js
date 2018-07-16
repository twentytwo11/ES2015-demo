function* genFn() {
    yield 1
    yield sum()
    return 2
}

function* sum(){
    yield 3
    yield 4
}
//没有执行 sum()

let res = genFn()

console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())

function* genFn2() {
    yield 1
    yield* sum2()
    return 2
}

function* sum2(){
    yield 3
    yield 4
}
//没有执行 sum()

let res2 = genFn2()

console.log(res2.next())
console.log(res2.next())
console.log(res2.next())
console.log(res2.next())
//
// { value: 1, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: 2, done: true }