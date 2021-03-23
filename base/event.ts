
interface IEvent {
  callbacks: { [propName: string]: (() => void)[] };
  $on?(name: string, fn: () => void): void;
  $emit?(name: string, args: any): void;
  $off?(name: string): void;
}


// 订阅发布
class MyEvent implements IEvent {
  callbacks = {}

  $on(name, fn) {
    if (this.callbacks[name]) {
      this.callbacks[name].push(fn)
    } else {
      this.callbacks[name] = [fn]
    }
  }

  $emit(name, ...args: any[]) {
    const cbs = this.callbacks[name];
    if (cbs) {
      cbs.forEach(cb => {
        cb.apply(this, args)
      });
    }
  }

  $off(name: string) {
    this.callbacks[name] = null
  }
}


const myEvent = new MyEvent();

//  监听回调
myEvent.$on('name', (...arg) => {
  console.log('name', ...arg)
})

myEvent.$on('name1', (...arg) => {
  console.log('name1', ...arg)
})


// myEvent.$emit('name', { name: 1 }, { age: 2 })


myEvent.$off('name')

myEvent.$emit('name', { name: 1 }, { age: 2 })

