//基本操作
let promise = new Promise(function (reslove,reject){
    reslove('yes')
} )

promise.then((data) => {
    console.log('then-1')
    console.log(data)
    return 'message'
})
    .then((data) => {
        console.log('then-2')
        console.log(data)
        return new Promise(function (reslove,reject) {
            reject('end-state')
        })
    }, (err) => {
    // error
        console.log(err)
})
    .then((data) => {
        console.log('then-3')
        console.log(data)
},(err) => {
    console.log(err)
})
    .then((data) => {
        console.log('then-4')
    })