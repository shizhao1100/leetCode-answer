/*
 * @lc app=leetcode.cn id=1304 lang=javascript
 *
 * [1304] 和为零的N个唯一整数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let answer = [];
  for (let i = parseInt(n / 2); i > 0; i--) {
    answer.push(-i)
  }
  if (n % 2 != 0) {
    answer.push(0)
  }
  for (let i = 1; i <= parseInt(n / 2); i++) {
    answer.push(i)
  }
  return answer
};
// @lc code=end

