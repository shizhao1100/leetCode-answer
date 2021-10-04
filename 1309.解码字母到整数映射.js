/*
 * @lc app=leetcode.cn id=1309 lang=javascript
 *
 * [1309] 解码字母到整数映射
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  for (let i = 10; i <= 26; i++) {
    s = s.replaceAll(`${i}#`, String.fromCharCode(106 + i - 10));
  }
  for (let i = 1; i <= 9; i++) {
    s = s.replaceAll(`${i}`, String.fromCharCode(97 + i - 1));
  }
  return s;
};
// @lc code=end
