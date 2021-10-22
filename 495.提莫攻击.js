/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let answer = 0;
  timeSeries = timeSeries.sort((a, b) => {
    return a - b;
  });
  for (let index = 1; index < timeSeries.length; index++) {
    const dtime = timeSeries[index] - timeSeries[index - 1];
    if (dtime < duration) {
      answer += dtime;
    } else {
      answer += duration;
    }
  }
  return answer + duration;
};
// @lc code=end
