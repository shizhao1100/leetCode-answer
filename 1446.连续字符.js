/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let sum = 1;
  let max = 1;
  let preChar = s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === preChar) {
      sum++;
      if (sum > max) {
        max = sum;
      }decodeURI
    } else {
      preChar = s[i];
      sum = 1;
    }
  }
  return max;
};
// @lc code=end
