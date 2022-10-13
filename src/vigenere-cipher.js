const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(message, key) {
    if (!(message && key)) {
      throw new Error("Incorrect arguments!");
    }

    let result = [];
    let messageArray = message.toUpperCase().split("");
    let keyArray = [];
    let k = 0;
    for (let i = 0; i < message.length; i++) {
      if (
        messageArray[i].charCodeAt(0) < 65 ||
        messageArray[i].charCodeAt(0) > 122
      ) {
        keyArray.push(messageArray[i]);
      } else {
        keyArray.push(key[k % key.length].toUpperCase().charCodeAt(0));
        k++;
      }
    }
    for (let i = 0; i < message.length; i++) {
      if (
        messageArray[i].charCodeAt(0) > 64 &&
        messageArray[i].charCodeAt(0) < 91
      ) {
        result.push(
          String.fromCharCode(
            65 + ((messageArray[i].charCodeAt(0) - 65 + keyArray[i] - 65) % 26)
          )
        );
      } else {
        result.push(messageArray[i]);
      }
    }
    return this.type == true ? result.join("") : result.reverse().join("");
  }
  decrypt(message, key) {
    if (!(message && key)) {
      throw new Error("Incorrect arguments!");
    }
    let result = [];
    let messageArray = message.toUpperCase().split("");
    let keyArray = [];
    let k = 0;
    for (let i = 0; i < message.length; i++) {
      if (
        messageArray[i].charCodeAt(0) < 65 ||
        messageArray[i].charCodeAt(0) > 122
      ) {
        keyArray.push(messageArray[i]);
      } else {
        keyArray.push(key[k % key.length].toUpperCase().charCodeAt(0));
        k++;
      }
    }
    for (let i = 0; i < message.length; i++) {
      if (
        messageArray[i].charCodeAt(0) > 64 &&
        messageArray[i].charCodeAt(0) < 91
      ) {
        result.push(
          String.fromCharCode(
            65 +
              ((messageArray[i].charCodeAt(0) - 65 - (keyArray[i] - 65) + 26) %
                26)
          )
        );
      } else {
        result.push(messageArray[i]);
      }
    }
    return this.type == true ? result.join("") : result.reverse().join("");
    // return message;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
