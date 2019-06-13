/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */

/*
* 细节：倒序相减 比较每个差值 求出最大差值 时间复杂度On^2
*/
var maxProfit = function (prices) {
  let answer = 0;
  for (let i = prices.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (prices[i] - prices[j] > answer) {
        answer = prices[i] - prices[j];
      }
    }
  }
  return answer;
};

/*
* 方法：动态规划
* 细节：最大利润=max{前一天最大利润, 今天的价格 - 之前最低价格} 时间复杂度On
*/
var maxProfit = function (prices) {
  var res = 0;
  var min = prices[0];
  for (var i = 1; i < prices.length; i++) {
    // 最小的购买，最大的卖
    min = prices[i] < min ? prices[i] : min;
    res = prices[i] - min > res ? prices[i] - min : res;
  }
  return res;
};
