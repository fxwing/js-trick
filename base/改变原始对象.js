var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 改变原始对象的一些现象
var source = {
    p: {
        x: [1]
    },
    m: 2,
    k: [1]
};
// 1.赋值 直接修改原始对象
//const o1 = source;
//o1.m = 3;
// 引用的同一块地址
//console.log(source); // { p: { x: [ 1 ] }, m: 3 }
//2.函数参数也是对象的引用  直接修改原始对象
// function fn(o): void {
//   o.m = 3;
//   o.p.x = 2;
// }
// fn(source);
// console.log(source); // { p: { x: 2 }, m: 3 }
//3 浅拷贝   修改第一层不受影响  不论是什么简单还是复杂数据类型
var o1 = __assign({}, source);
//o1.m = 3;
//console.log(source); //{ p: { x: [ 1 ] }, m: 2 }
//o1.p = 2;
//console.log(source); // { p: { x: [ 1 ] }, m: 2 }
// 修改第二层 原始对象跟着修改
// o1.p.x = 2
//console.log(source); // { p: { x: 2 }, m: 2 }
// 只要修改第二层是(复杂数据类型)数组和对象就跟着修改
//o1.k[0]=2
//console.log(source); // { p: { x: [ 1 ] }, m: 2, k: [ 2 ] }
// 解决引用类型对象被修改的办法
// 1.深拷贝 比较消耗性能
//2.immutablejs immer 不可变更类型
// 比较
var _source = {
    p: {
        x: [1]
    },
    m: 2,
    k: [1]
};
// 地址不一样
console.log(source === _source); // false
