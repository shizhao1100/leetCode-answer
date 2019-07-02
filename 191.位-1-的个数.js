/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */

/*
* 方法：直接拿到二进制串 去除所有0 数长度完成
*/
var hammingWeight = function (n) {
  return n.toString(2).replace("0", '').length;
};

/*
* 方法：每次右移移位 判断是否为0
*/
var hammingWeight = function (n) {
  let answer = 0;
  while (n) {
    if (n & 1) {
      answer++;
    }
    n = n >>> 1;
  }
  return answer;
};
