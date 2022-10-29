const isEven = require("is-even")

module.exports = isOdd = function(num) {
    return !isEven(num);
}