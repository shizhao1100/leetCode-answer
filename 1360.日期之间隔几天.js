/*
 * @lc app=leetcode.cn id=1360 lang=javascript
 *
 * [1360] 日期之间隔几天
 */

// @lc code=start
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  return Math.abs((new Date(date1) - new Date(date2)) / 1000 / 60 / 60 / 24);
};
// @lc code=end
