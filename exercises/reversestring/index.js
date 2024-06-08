// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = (str) => {
    debugger;
    return str.split("").reduce((acc, cur) => cur + acc, "")
}

reverse("abcd");

module.exports = reverse;

// function reverse(str) {
//     const reverseArray = [];
//     for (let i = 0; i < str.length / 2; i++) {
//         reverseArray[i] = str[str.length - 1 - i];
//         reverseArray[str.length - 1 - i] = str[i];
//     }
//     return reverseArray.join('');
// }
