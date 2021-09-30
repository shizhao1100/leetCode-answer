/*
 * @lc app=leetcode.cn id=1281 lang=javascript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let sum = 0;
  let product = 1;
  const numString = n.toString();

  for (let i = 0; i < numString.length; i++) {
    sum += parseInt(numString[i])
    product *= parseInt(numString[i])
  }
  return product - sum
};
// @lc code=end

