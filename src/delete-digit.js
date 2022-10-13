const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let v = String(n);
  let max = 0;
  for (let i = 0; i < v.length; i++) {
    let x = Number(v.slice(0, i) + v.slice(i + 1));
    if (x > max) {
      max = x;
    }
  }
  return max;
}

module.exports = {
  deleteDigit,
};
