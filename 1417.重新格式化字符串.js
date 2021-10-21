/*
 * @lc app=leetcode.cn id=1417 lang=javascript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let string = "";
  let number = "";
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) {
      string += s[i];
    } else {
      number += s[i];
    }
  }
  if (Math.abs(string.length - number.length) > 1) {
    return "";
  } else {
    if (string.length === number.length) {
      for (let i = 0; i < number.length; i++) {
        answer = answer + string[i] + number[i];
      }
    } else if (string.length > number.length) {
      for (let i = 0; i < number.length; i++) {
        answer = answer + string[i] + number[i];
      }
      answer += string[string.length - 1];
    } else if (string.length < number.length) {
      for (let i = 0; i < string.length; i++) {
        answer = answer + number[i] + string[i];
      }
      answer += number[number.length - 1];
    }
  }
  return answer;
};
// @lc code=end
