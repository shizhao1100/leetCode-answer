/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */

/*
* 细节：计算股票价格曲线图有所增量部分的总和 即 以后的价格大于当前价格则记录价格差值。 记录所有差值的总和
* 时间复杂度：On
*/
var maxProfit = function (prices) {
  let sum = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] - prices[i] > 0) {
      sum = sum + (prices[i + 1] - prices[i]);
    }
  }
  return sum;
};

