/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */
/**
 * @param {number} n
 * @return {number}
 */

/*
* 细节：10=2*5 阶乘2一定比5多 即问题转化为 n 里最多包含几个5作为因子
* 时间复杂度：O^n
*/
var trailingZeroes = function (n) {
  let answer = 0;
  while (n>=5) {
    answer = answer + parseInt(n / 5);
    n = parseInt(n / 5)
  }
  return answer;
};

