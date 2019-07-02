/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length;
  while (k > len) {
    k = k - len
  }
  nums.reverse();
  let lastArray = nums.splice(k, len - k).reverse();
  nums.reverse();
  nums.splice(k, 0, ...lastArray);
};
