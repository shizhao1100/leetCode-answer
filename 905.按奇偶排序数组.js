/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  A.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) {
      return -1
    } else if (b % 2 === 0 && a % 2 !== 0) {
      return 1
    } else {
      return 0
    }
  })
  return A
};
// @lc code=end

