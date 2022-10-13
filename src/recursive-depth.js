const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let deep = 1;
    for (let v of arr) {
      let count = 1;
      if (Array.isArray(v)) {
        count += this.calculateDepth(v);
        if (count > deep) {
          deep = count;
        }
      }
    }
    return deep;
  }
}

module.exports = {
  DepthCalculator,
};
