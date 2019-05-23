/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.14%)
 * Total Accepted:    74.9K
 * Total Submissions: 240.6K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 * 
 */


 /*
 * 解法: 迭代法 
 * 思路：分为正负两种情况处理、取绝对值、翻转数字、判断是否溢出。
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let answer = 0;
  let greaterZero = true;
  if (x <= 0) {
    greaterZero = false;
  }
  let X = Math.abs(x).toString();
  for (let i = X.length - 1; i >= 0; i--) {
    answer = answer * 10 + parseInt(X[i]);
  }
  if (!greaterZero) {
    answer = -answer;
  }
  if (answer < -2147483648 || answer > 2147483647) {
    answer = 0;
  }
  return answer;
};

