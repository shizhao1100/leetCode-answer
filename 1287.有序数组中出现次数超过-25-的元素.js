/*
 * @lc app=leetcode.cn id=1287 lang=javascript
 *
 * [1287] 有序数组中出现次数超过25%的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let number = arr[0];
  let numCount = 1;
  if (arr.length === 1) return number;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === number) {
      numCount++;
    } else {
      number = arr[i];
      numCount = 1;
    }
    if (numCount / arr.length > 0.25) {
      return number;
    }
  }
};
// @lc code=end
