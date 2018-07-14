var a=1;
var b=2;


function  aa(callback) {
    setTimeout(function () {
        callback("aa's callback");
    },5000);
    console.log("aa")
}

function bb(callback){
    setTimeout(function () {
        callback("bb's callback");
    },3000)
    console.log("bb")
}
function cc(c1) {
    console.log(c1)
}



//
// aa(function (zz){
//     //sdkjfsdkhjkdsd
//     console.log(zz)
//     bb(function (uu) {
//         cc(uu);
//     });
// });








function dd(opt) {
    console.log(opt.a1);
    setTimeout(opt.succ,2000);
    console.log(opt.a2)
}


dd({a1:1,a2:2,succ:function(){console.log(3)}})







