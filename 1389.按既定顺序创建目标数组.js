/*
 * @lc app=leetcode.cn id=1389 lang=javascript
 *
 * [1389] 按既定顺序创建目标数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let answer = [];
  let max = Math.max(nums.length, index.length);
  for (let i = 0; i < max; i++) {
    answer.splice(index[i], 0, nums[i]);
  }
  return answer;
};
// @lc code=end
