var mathjs = require('mathjs');

exports.add = function (x, y) {
    return mathjs.add(x, y);
}

exports.subtract = function (x, y) {
    return mathjs.subtract(x, y);
}

exports.multiply = function (x, y) {
    return mathjs.multiply(x, y);
}

exports.divide = function (x, y) {
    return mathjs.divide(x, y);
}

exports.abs = function (x) {
    if (x < 0) {
        x = x * -1;
    };
    return x;
}