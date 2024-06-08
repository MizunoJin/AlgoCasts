// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const wordsA = extractWords(stringA)
    const wordsB = extractWords(stringB)

    return wordsA.split("").sort().join('') === wordsB.split("").sort().join('')
}

// function anagrams(stringA, stringB) {
//     // Remove symbols and convert to lower case
//     const wordsA = extractWords(stringA)
//     const wordsB = extractWords(stringB)

//     // Count the number of characters
//     const charMapA = countChars(wordsA)
//     const charMapB = countChars(wordsB)


//     // Check if the number of characters is the same
//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//         return false
//     }
//     return isEqual(charMapA, charMapB)
// }

function isEqual(objectA, objectB) {
    for (const [key, value] of Object.entries(objectA)) {
        if (objectB[key] !== value) {
            return false
        }
    }
    return true
}

function extractWords(string) {
    return string.replace(/\W/g, "").toLowerCase()
}

function countChars(string) {
    const charMap = {}
    for (const char of string) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

module.exports = anagrams;
