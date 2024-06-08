const reverseInt = (n) =>
    parseInt(Math.abs(n).toString().split('').reverse().join('')) * Math.sign(n)

module.exports = reverseInt;
