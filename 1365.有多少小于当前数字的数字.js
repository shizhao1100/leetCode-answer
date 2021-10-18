/*
 * @lc app=leetcode.cn id=1365 lang=javascript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let numsCopy = [].concat(nums);
  numsCopy = numsCopy.sort((a, b) => {
    return a - b;
  });
  let answer = [];
  let numHash = {};
  let index = 0;
  let num = numsCopy[0];
  for (let i = 0; i < numsCopy.length; i++) {
    if (num < numsCopy[i]) {
      num = numsCopy[i];
      index = i;
    }
    numHash[numsCopy[i]] = index;
  }
  for (let i = 0; i < nums.length; i++) {
    answer.push(numHash[nums[i]]);
  }
  return answer;
};
// @lc code=end
