// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};

    for (let char of str) {
        chars[char] = chars[char] ? chars[char] + 1 : 1;
    }

    let maxNumber = 0;
    let maxChar = '';
    for (const[key, value] of Object.entries(chars)) {
        if (value > maxNumber) {
            maxNumber = value;
            maxChar = key;
        }
    }

    return maxChar;
}

module.exports = maxChar;
