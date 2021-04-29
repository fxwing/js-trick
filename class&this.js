class Test{
  constructor(name){
    this.name = name;
  }
  setName(name){
    console.log(this); // undefined
    this.name = name // 会报错
  }
}

const  test = new Test('1')
// const {setName} = test;
const  setName = test.setName // 意思是一样的
// test.setName('2')
setName('2')
console.log(test);
