const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  for (let v of matrix) {
    let arr = [];
    for (let val of v) {
      arr.push(0);
    }
    result.push(arr);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let total = 0;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (
            matrix[i + x] &&
            matrix[i + x][j + y] &&
            Math.abs(x) + Math.abs(y) != 0
          ) {
            total += matrix[i + x][j + y];
          }
        }
      }

      result[i][j] = total;
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};
