// 手动实现 intsanceof
// 判断某一个实例属于某种类型

function myInstanceof(leftValue: any, rightValue: Function): boolean {
  const rightPrototype = rightValue.prototype;
  leftValue = leftValue.__proto__;
  while (true) {
     if (leftValue === null) {
       return false;
     }
    if (leftValue === rightPrototype) {
      return true;
    }
    leftValue = leftValue.__proto__;
  }
}

console.log(myInstanceof({},Object));
