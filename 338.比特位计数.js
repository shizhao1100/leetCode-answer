/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = [0, 1];
  if (n <= 1) return result.slice(0, n + 1);
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      result.push(result[i / 2]);
    } else {
      result.push(result[i - 1] + 1);
    }
  }
  return result;
};
// @lc code=end
