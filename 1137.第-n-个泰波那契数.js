/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const tribonacciArray = [0, 1, 1];
  if (n >= 3) {
    for (let i = 3; i <= n; i++) {
      tribonacciArray.push(
        tribonacciArray[i - 1] + tribonacciArray[i - 2] + tribonacciArray[i - 3]
      );
    }
  }
  return tribonacciArray[n];
};
// @lc code=end
