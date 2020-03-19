/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let repeatNum = undefined;
  let expectSum = (1 + nums.length) * nums.length / 2;
  let realSum = 0;
  let hashTable = {}
  for (let i = 0; i < nums.length; i++) {
    realSum = realSum + nums[i];
    if (hashTable[nums[i]]) {
      repeatNum = nums[i];
    } else {
      hashTable[nums[i]] = true;
    }
  }
  return [repeatNum, expectSum - realSum + repeatNum];
};
// @lc code=end

