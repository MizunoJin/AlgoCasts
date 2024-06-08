// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  const stepRecursive = (n, row = 0, string = "") => {
    if (n === row) return;

    if (n === string.length) {
      console.log(string);
      return stepRecursive(n, row + 1);
    }

    const add = string.length <= row ? "#" : " ";
    stepRecursive(n, row, string + add);
  };

  stepRecursive(n);
}

// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log('#'.repeat(i) + ' '.repeat(n-i))
//     }
// }

module.exports = steps;
