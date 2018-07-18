//可解除的代理
var revocable = Proxy.revocable({}, {
    get: function(target, name) {
        return "[[" + name + "]]";
    }
});
var proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"
revocable.revoke();
// console.log(proxy.foo); // 抛出异常
// proxy.foo = 1           // 抛出异常
// delete proxy.foo;       // 抛出异常
// typeof proxy            // "object"