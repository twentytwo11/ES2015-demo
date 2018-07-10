// const与块级作用域

const JSONP = (function () {
    const global = window //定义window别名 增强可读性
    const defaultOptions = Object.freeze({
        data:{},
        callback: (data) => {}
    })
    //fresze方法，锁定对象不可修改（es5）

    function safeEscape(str) {
        return encodeURIComponent(str.toString())
    }

    // ...TODO
})()