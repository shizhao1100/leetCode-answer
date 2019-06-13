/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
* 细节：异或运算, 两数相同时异或为0 与0异或还为他本身
*/
var singleNumber = function (nums) {
  let anwser = 0;
  for (let i = 0; i < nums.length; i++) {
    anwser = anwser ^ nums[i];
  }
  return anwser;
};

