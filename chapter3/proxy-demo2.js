//通过proxy代理验证用户数据

let validator = {
    set:function (obj,prop,value) {
        if(prop === 'age'){
            if(!Number.isInteger(value)){
                throw new TypeError('年龄必须为整数')
            }
            if(value > 150){
                throw new TypeError('输入年龄超过限制范围')
            }

        }

        obj[prop] = value
    }
}

let User = new Proxy({},validator);

User.age = 80
console.log(User.age)
//User.age = 'age'//抛出异常
//User.age = 200//抛出异常