

//  ts 中定义promise

const timeFn = (time: number) =>
  new Promise((reslove: (...rest: any[]) => void, reject) => {
    setTimeout(() => {
      reslove();
    }, time);
  })

const ajax1 = (): Promise<number> =>
  timeFn(1000).then(res => {
    console.log(1);
    return 1;
  })

const ajax2 = (): Promise<number> =>
  timeFn(1000).then(res => {
    console.log(2);
    return 2;
  })






