/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

/*
* 方法：直接拿到二进制串 翻转 补0 格式化。
* 细节：经过了 将十进制转化为2进制串，将二进制串再次转化为10进制的操作。 时间开销较大
*/
var reverseBits = function (n) {
  let bitsArray = n.toString(2).split('').reverse();
  let bitsString = bitsArray.join('');
  while (32 - bitsString.length) {
    bitsString = bitsString + '0';
  }
  return parseInt(bitsString, 2);
};
/*
* 方法：从n右侧取出一位 res + n取出的一位（0||1） res左移
* 细节：一共只需要做 64 次移位、赋值操作和 32次加法操作完成。
*/
var reverseBits = function (n) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res = (res << 1) + (n & 1);
    n = n >>> 1;
  }
  return res >>> 0;
};