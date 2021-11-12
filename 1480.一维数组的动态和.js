/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const answer = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    answer.push(sum + nums[i]);
    sum += nums[i];
  }
  return answer;
};
// @lc code=end
