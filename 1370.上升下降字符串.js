/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
/**
 * @way hash
 * @from
 * @description
 * @result
 * @O
 * @time 2021-10-25 00:28:00
 */
var sortString = function (s) {
  let result = "";
  let charCount = [];
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i].charCodeAt() - 97]) {
      charCount[s[i].charCodeAt() - 97]++;
    } else {
      charCount[s[i].charCodeAt() - 97] = 1;
    }
  }
  while (result.length < s.length) {
    for (let j = 0; j < charCount.length; j++) {
      if (charCount[j]) {
        charCount[j]--;
        result += String.fromCharCode(j + 97);
      }
    }
    for (let j = charCount.length - 1; j >= 0; j--) {
      if (charCount[j]) {
        charCount[j]--;
        result += String.fromCharCode(j + 97);
      }
    }
  }
  return result;
};
// @lc code=end
