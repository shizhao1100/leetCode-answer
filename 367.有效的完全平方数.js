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

// 牛顿逼近法
// 本题也就是求 x^2 - num = 0 的根。
// 根据牛顿逼近法的求根公式
// x1 = x0 - f(x0)/(f`(x0))
// 假设 x0 = num
// 即第一次迭代为 num-((num * num-num)/ 2 * num)
// 去x0 = x1 继续迭代

var isPerfectSquare = function (num) {
  let i = num;
  while (i * i > num) {
    i = parseInt(i - (i * i - num) / (2 * num), 10);
  }
  return i * i === num
};
// @lc code=end

