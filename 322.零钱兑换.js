/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) {
    return 0
  }
  function getMin(mins) {
    let min = mins[0];
    for (let i = 1; i < mins.length; i++) {
      if ((!isNaN(mins[i]) && mins[i] !== undefined && mins[i] < min) || isNaN(min)) {
        min = mins[i]
      }
    }
    return min;
  }
  function getMins(value) {
    let mins = [];
    for (let i = 0; i < coins.length; i++) {
      if (value === coins[i]) {
        return 1;
      } else {
        mins.push(answers[value - coins[i]] + 1);
      }
    }
    min = getMin(mins);
    return min;
  }

  let answers = [];
  coins.sort((a, b) => a > b);

  for (let i = coins[0]; i <= amount; i++) {
    answers[i] = getMins(i);
  }
  return answers[amount] || -1;
};
