/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let point = 0;
  let answer = 0;
  let temp = 0;
  while (point < nums.length) {
    if (nums[point] === 1) {
      temp++;
    } else {
      if (temp > answer) {
        answer = temp;
      }
      temp = 0;
    }
    point++;
  }
  if (temp > answer) {
    answer = temp;
  }
  return answer;
};
// @lc code=end

