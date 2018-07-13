//promise对象

var promise = new Promise(function(resolve, reject) {
    // 2秒后置为接收状态
    setTimeout(function() {
        resolve('success');
    }, 2000);
});

promise
    .then(function(data) {
        // 上一个then()调用了resolve，状态为fulfilled
        console.log('第一个then');
        console.log(data);
        return '2';
    })
    .then(function(data) {
        // 状态为fulfilled, 因为上一步返回了2
        console.log('第二个then');
        console.log(data);  // 2

        return new Promise(function(resolve, reject) {
            reject('把状态置为rejected error'); // 返回一个rejected的Promise实例
        });
    }, function(err) {
        // error
    })
    .then(function(data) {
        /* 不运行 */
        console.log('第三个then');
        console.log(data);
    }, function(err) {
        // error回调
        // 状态为fulfilled, 因为上一步使用了reject()来返回值
        console.log('出错：' + err); // 出错：把状态置为rejected error
    })
    .then(function(data) {
        // 没有明确指定返回值，默认返回fulfilled
        console.log('这里是fulfilled状态');
    });

//捕获异常 catch()

var promise2 = new Promise(function (resolve,reject) {
    setTimeout(function () {
        reject('error')
    },2000)
})

promise2.then(function (data) {
    console.log('这里是fulfilled状态')
})
        .catch(function (err) {
            console.log('错误'+ err)
        })

