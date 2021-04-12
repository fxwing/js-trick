//  ts 中定义promise
var timeFn = function (time) {
    return new Promise(function (reslove, reject) {
        setTimeout(function () {
            reslove();
        }, time);
    });
};
var ajax1 = function () {
    return timeFn(1000).then(function (res) {
        console.log(1);
        return 1;
    });
};
var ajax2 = function () {
    return timeFn(1000).then(function (res) {
        console.log(2);
        return 2;
    });
};
