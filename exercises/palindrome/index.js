function palindrome(str) {
    const reversed = str.split("").reduce((acc, cur) => cur + acc, "");
    return str === reversed;
}

module.exports = palindrome;
