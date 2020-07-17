/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  if (A.length <= 2) return true
  let status = 0;
  for (let i = 0; i < A.length - 1; i++) {
    if (status === 0) {
      if (A[i + 1] - A[i] > 0) {
        status = 1;
      } if (A[i + 1] - A[i] < 0) {
        status = -1;
      }
    }
    if (status === 1) {
      if (A[i + 1] - A[i] >= 0) {
        continue;
      }
      return false
    }
    if (status === -1) {
      if (A[i + 1] - A[i] <= 0) {
        continue;
      }
      return false
    }
  }
  return true;
};
// @lc code=end

