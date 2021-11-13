/*
 * @lc app=leetcode.cn id=1491 lang=javascript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < salary.length; i++) {
    sum += salary[i];
    if (salary[i] > max) max = salary[i];
    if (salary[i] < min) min = salary[i];
  }
  return (sum - min - max) / (salary.length - 2);
};
// @lc code=end
