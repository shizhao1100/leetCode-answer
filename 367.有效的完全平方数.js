/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */

/**
 * 完全平方数规律
 * 1 = 1
 * 4 = 1 + 3
 * 9 = 1 + 3 + 5
 * 16= 1 + 3 + 5 + 7
 * ...
 * n*n = 1 + 3 + 5 + 7 + ...+(2n - 1)
 */

// 方法1 累加（从1开始加 等于num则为true）
// 方法2 递归（从num开始减 最终=0则return true）
var isPerfectSquare = function (num) {

};

// TODO
// 牛顿逼近法
var isPerfectSquare = function (num) {

};

// 二分查找
var isPerfectSquare = function (num) {
  let left = 0;
  let right = 46341;

  while (right - left > 1) {
    let key = parseInt((left + right) / 2, 10);
    if (key * key < num) {
      left = key;
    } else if (key * key > num) {
      right = key;
    } else {
      return true;
    }
  }
  return false;
};

// @lc code=end

