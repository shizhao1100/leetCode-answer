/*
 * @lc app=leetcode.cn id=1313 lang=javascript
 *
 * [1313] 解压缩编码列表
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let answer = [];
  for (i = 0; i < nums.length; i += 2) {
    const k = nums[i];
    const v = nums[i + 1];
    for (let j = 0; j < k; j++) {
      answer.push(v);
    }
  }
  return answer;
};
// @lc code=end
