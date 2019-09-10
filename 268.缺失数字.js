/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let answer = (nums.length + 1) * nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    answer = answer - nums[i];
  }
  return answer;
};
