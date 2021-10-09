/*
 * @lc app=leetcode.cn id=1317 lang=javascript
 *
 * [1317] 将整数转换为两个无零整数的和
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  for (var i = 1; i < n; i++) {
    if (i.toString().includes("0")) continue;
    if ((n - i).toString().includes("0")) continue;
    return [i, n - i];
  }
};
// @lc code=end
