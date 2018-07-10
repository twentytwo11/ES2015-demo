//模版字符串 反勾号 ``
const str = 'str';
const num = 1;
const void0 = void(0);
const bool = true;
const obj = {foo:'bar'};
const arr = [1,2,3];
const err = new Error('error');
const regexp = /foobar/;

const s1 = `String: ${str}`;
console.log(s1);
const s2 = `Number:${num}`;
console.log(s2);
const s3 = `null:${null}`;
console.log(s3);
const s4 = `undefined:${void0}`;
console.log(s4);
const s5 = `Boolean:${bool}`;
console.log(s5);
const s6 = `Object:${obj}`;
console.log(s6);
const s7 = `Array:${arr}`;
console.log(s7);
const s8 = `Error:${err}`;
console.log(s8);
const s9 = `RegExp:${regexp}`;
console.log(s9);

//可换行
const a = `one two
three
four`;
console.log(a);