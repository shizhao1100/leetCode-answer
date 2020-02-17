/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  if (s.length - s.replace(/A/g, '').length >= 2) {
    return false;
  }
  if (s.replace(/LLL/g, '').length !== s.length) {
    return false
  }
  return true;
};
// @lc code=end

