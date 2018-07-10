//逻辑
//箭头函数强制绑定上下文

const a = {
    init(){
        this.bar = () => this.dam
    },
    dam:'hei',
    foo(){
        return this.dam
    }
}

const b = {
    dam:'ha'
}

a.init();

console.log(a.foo());
console.log(a.foo.bind(b).call(a));//ha
console.log(a.bar.call(b));//hei 没有改变this指向

//call/apply不能改变箭头函数对上下文的绑定
//箭头函数中没有arguments callee caller等对象