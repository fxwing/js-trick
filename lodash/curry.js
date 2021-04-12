"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// 柯里化有用的场景
// 多参数支持依次调用
var lodash_1 = __importDefault(require("lodash"));
// const arr: number[] = [1, 2];
// console.log(_(arr).value());
function simpleUrl(protocol, domin, path) {
    return protocol + "://" + domin + "/" + path;
}
//避免传递 重复的参数
var simpleUrl1 = lodash_1["default"].curry(simpleUrl);
var simpleUrl2 = simpleUrl1("http");
// console.log(simpleUrl<string>("http", "www.baidu.com", "index"));
console.log(simpleUrl2("www.baidu.com", "index"));
function getProps(key, obj) {
    return obj[key];
}
var curryGetProps = lodash_1["default"].curry(getProps);
var getName = curryGetProps("name");
var getAge = curryGetProps("age");
var obj = [
    { name: 1, age: 11 },
    { name: 2, age: 22 },
];
var names = obj.map(getName);
var ages = obj.map(getAge);
console.log(names, ages); // [1,2] [11,22]
