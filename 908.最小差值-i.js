/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 最小差值 I
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) max = A[i];
    if (A[i] < min) min = A[i];
  }
  let maxDifference = max - min;
  if (maxDifference > 2 * K) {
    return maxDifference - 2 * K
  } else {
    return 0
  }
};
// @lc code=end

