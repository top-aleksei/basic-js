const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  filteredArr = arr.filter((el) => el != -1).sort((a, b) => a - b);
  let result = [];
  for (let v of arr) {
    if (v === -1) {
      result.push(-1);
    } else {
      result.push(filteredArr.shift());
    }
  }
  return result;
}

module.exports = {
  sortByHeight,
};
