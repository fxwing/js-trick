// 柯里化有用的场景
// 多参数支持依次调用
import _ from "lodash";
// const arr: number[] = [1, 2];
// console.log(_(arr).value());
function simpleUrl<T = string>(protocol: T, domin: T, path: T): any {
  return `${protocol}://${domin}/${path}`;
}
//避免传递 重复的参数
const simpleUrl1 = _.curry(simpleUrl);
const simpleUrl2 = simpleUrl1("http");

// console.log(simpleUrl<string>("http", "www.baidu.com", "index"));
console.log(simpleUrl2("www.baidu.com", "index"));
// 支持参数单一传递   依次调用的顺序为参数的循序
interface Obj {
  [propsName: string]: any;
}

function getProps<T = Obj>(key: keyof T, obj: T): T[keyof T] {
  return obj[key];
}

const curryGetProps = _.curry(getProps);
const getName = curryGetProps("name");
const getAge = curryGetProps("age");
const obj = [
  { name: 1, age: 11 },
  { name: 2, age: 22 },
];
const names = obj.map(getName);
const ages = obj.map(getAge);
console.log(names, ages);// [1,2] [11,22]
