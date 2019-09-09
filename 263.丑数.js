/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  while (num) {
    if (num % 2 === 0) {
      num = num / 2;
      continue;
    }
    if (num % 3 === 0) {
      num = num / 3;
      continue;
    }
    if (num % 5 === 0) {
      num = num / 5;
      continue;
    }
    if (num === 1) {
      return true;
    }
    return false;
  }
  return false;
};