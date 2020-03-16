/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let i = 0; i * i <= c; i++) {
    let b = Math.sqrt(c - i * i);
    if (parseInt(b) === b) {
      return true;
    }
  }
  return false;
};
// @lc code=end

