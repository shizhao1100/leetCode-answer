/*
 * @lc app=leetcode.cn id=1413 lang=javascript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let min = Infinity;
  let sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum < min) {
      min = sum;
    }
  }
  if (min >= 0) {
    return 1;
  } else {
    return -min + 1;
  }
};
// @lc code=end
