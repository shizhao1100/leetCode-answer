/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    answer = answer * 26 + (s[i].charCodeAt() - 64);
  }
  return answer;
};
