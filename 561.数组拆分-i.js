/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  const sumsSorted = nums.sort((a, b) => { return a - b });
  let answer = 0;
  for (let i = 0; i < nums.length; i += 2){
    answer = answer + nums[i];
  }
  return answer;
};
// @lc code=end

