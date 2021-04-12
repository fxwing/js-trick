var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// 订阅发布
var MyEvent = /** @class */ (function () {
    function MyEvent() {
        this.callbacks = {};
    }
    MyEvent.prototype.$on = function (name, fn) {
        if (this.callbacks[name]) {
            this.callbacks[name].push(fn);
        }
        else {
            this.callbacks[name] = [fn];
        }
    };
    MyEvent.prototype.$emit = function (name) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var cbs = this.callbacks[name];
        if (cbs) {
            cbs.forEach(function (cb) {
                cb.apply(_this, args);
            });
        }
    };
    MyEvent.prototype.$off = function (name) {
        this.callbacks[name] = null;
    };
    return MyEvent;
}());
var myEvent = new MyEvent();
//  监听回调
myEvent.$on('name', function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    console.log.apply(console, __spreadArrays(['name'], arg));
});
myEvent.$on('name1', function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    console.log.apply(console, __spreadArrays(['name1'], arg));
});
// myEvent.$emit('name', { name: 1 }, { age: 2 })
myEvent.$off('name');
myEvent.$emit('name', { name: 1 }, { age: 2 });
