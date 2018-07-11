//fn 参数表达&传参

// 1. 默认参数值
function fn(arg = 'foo') {
    console.log(arg);
}

fn()
fn('bar')

//默认参数用在某个对象方法中
const obj = {
    msg:'World',

    greet(message = this.msg){
        console.log(`Hello ${message}`)
    }
}

obj.greet();
obj.greet('anlun');

