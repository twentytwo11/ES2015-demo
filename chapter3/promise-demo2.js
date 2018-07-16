
//捕获错误
let promise = new Promise((resolve,reject) => {
    reject('error')
})
    .catch((err) => {
        console.log(err)
    })