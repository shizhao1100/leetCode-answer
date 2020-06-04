/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let hashTable = {};
  const morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  for (let i = 0; i < words.length; i++) {
    let wordMorse = '';
    for (let j = 0; j < words[i].length; j++) {
      const morseCodeIndex = words[i][j].charCodeAt() - 97;
      wordMorse = wordMorse + morseCode[morseCodeIndex]
    }
    hashTable[wordMorse] = true;
  }
  return Object.keys(hashTable).length;
};
// @lc code=end

