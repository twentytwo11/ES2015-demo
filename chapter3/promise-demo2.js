
//捕获错误
let promise = new Promise((resolve,reject) => {
    reject('error')
})
    .catch((err) => {
        console.log(err)
    })

// 穿透
let promise2 = new Promise((resolve,reject) => {
    resolve(8)
})
.then(1)
.catch(null)//应保证then 和 catch 接受的始终为函数参数
.then(Promise.resolve(9))
.then(res => console.log(res))