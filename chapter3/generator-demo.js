function* genFn() {
    yield '1'
    yield '2'
    return 'end'
}
let res = genFn()
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())

//
// { value: '1', done: false }
// { value: '2', done: false }
// { value: 'end', done: true }
// { value: undefined, done: true }