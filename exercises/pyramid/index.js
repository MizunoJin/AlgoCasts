// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#' i=1 j=1
//   pyramid(2)
//       ' # ' i=1 j=2
//       '###' i=2 j=1,2,3
//   pyramid(3)
//       '  #  ' i=1 j=3
//       ' ### ' i=2 j=2,3,4
//       '#####' i=3 j=1,2,3,4,5
                // n-i > j > n+1

function pyramid(n) {
    const recursivePyramid = (n, row = 1, str = '') => {
        if (row > n) return;

        if (str.length === n*2-1) {
            console.log(str);
            return recursivePyramid(n, row+1);
        }

        const lowerLimit = n - row - 1
        const upperLimit = n + row - 1
        if (str.length > lowerLimit && str.length < upperLimit) {
            str += '#'
        } else {
            str += " "
        }
        return recursivePyramid(n, row, str);
    }

    recursivePyramid(n)
}

// function pyramid(n) {
//     for (let i = 1; i <= n; i++) {

//         let string = ''
//         for (let j = 1; j < 2*n; j++) {
//             if (j > n-i && j < n+i) {
//                 string += '#'
//             } else {
//                 string += ' '
//             }
//         }
//         console.log(string)
//     }
// }

module.exports = pyramid;
