/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const res = [];
  if (!nums.length) return res;
  if (nums.length === 1) return [nums[0].toString()];
  let start = nums[0];
  for (let i = 1; i < nums.length + 1; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      continue;
    } else {
      if (start === nums[i - 1]) {
        res.push(start.toString());
      } else {
        res.push(`${start}->${nums[i - 1]}`);
      }
      start = nums[i];
    }
  }
  return res;
};
// @lc code=end
