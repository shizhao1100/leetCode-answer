/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let numString = num.toString(2);
  return parseInt(numString.replace(/0/g, 'a')
    .replace(/1/g, '0')
    .replace(/a/g, '1'), 2);
};
// @lc code=end

