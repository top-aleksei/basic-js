const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  for (let v of domains) {
    let adress = v.split(".");
    let res = "";
    for (let i = adress.length - 1; i >= 0; i--) {
      res += "." + adress[i];
      if (result[res]) {
        result[res]++;
      } else {
        result[res] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats,
};
