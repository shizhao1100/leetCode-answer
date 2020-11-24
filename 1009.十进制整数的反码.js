/*
 * @lc app=leetcode.cn id=1009 lang=javascript
 *
 * [1009] 十进制整数的反码
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
  let len = N.toString(2).length;
  let num = Math.pow(2, len) - 1;
  return num ^ N;
};
// @lc code=end
