/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

/*
* 方法：动态规划
* 细节：f(1) = [1] f(2) = max([0],[1]),f(3) = max(f(2),f(1)+[3]);
* 时间复杂度：On
*/
var rob = function (nums) {
  if (nums.length > 2) {
    let max_last2 = nums[0];
    let max_last1 = Math.max(nums[0], nums[1]);
    let max = max_last1;
    for (let i = 2; i < nums.length; i++) {
      let value = (nums[i] + max_last2);
      if (value > max) {
        max = value;
        max_last2 = max_last1;
        max_last1 = max;
      } else {
        max = max_last1;
        max_last2 = max_last1;
      }
    }
    return max;
  } else {
    return Math.max(...nums, 0);
  }
};
