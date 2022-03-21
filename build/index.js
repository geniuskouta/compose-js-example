"use strict";
var multiply = function (number) {
    return number * 2;
};
var addOne = function (number) {
    return number + 1;
};
var compose = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (arg) {
        return fns.reduce(function (composed, f) {
            return f(composed);
        }, arg);
    };
};
var chainCalc = compose(multiply, addOne);
console.log(chainCalc(3)); // output: 7
