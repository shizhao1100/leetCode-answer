/*
 * @lc app=leetcode.cn id=1309 lang=javascript
 *
 * [1309] 解码字母到整数映射
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
/**
 * @way 枚举
 * @from self
 * @description 枚举并替换对象
 * @result
 * @O
 * @time 2021-10-11 00:45:00
 */
var freqAlphabets = function (s) {
  for (let i = 10; i <= 26; i++) {
    s = s.replaceAll(`${i}#`, String.fromCharCode(106 + i - 10));
  }
  for (let i = 1; i <= 9; i++) {
    s = s.replaceAll(`${i}`, String.fromCharCode(97 + i - 1));
  }
  return s;
};

/**
 * @way 状态机
 * @from
 * @description 
 * @result
 * @O
 * @time 2021-10-11 00:45:31
 */
const isjToZ = function (s) {
  if (s.includes("#") && parseInt(s) <= 26 && parseInt(s) >= 10) {
    return true;
  } else {
    return false;
  }
};

var freqAlphabets = function (s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (isjToZ(s.substr(i, 3))) {
      answer += String.fromCharCode(106 + parseInt(s.substr(i, 3)) - 10);
      i += 2;
    } else {
      answer += String.fromCharCode(97 + parseInt(s[i]) - 1);
    }
  }
  return answer;
};
// @lc code=end
