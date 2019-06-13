/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 0) {
    return true;
  }
  let val = undefined;
  let start_p = 0;
  let end_p = s.length - 1;
  let direction = true;
  let er = /[0-9a-zA-Z]/;
  while (start_p !== (end_p + 1)) {
    if (direction) {
      if (er.test(s[start_p])) {
        val = s[start_p].toLocaleLowerCase();
        direction = false;
      }
      start_p++;
      continue;
    } else {
      if (er.test(s[end_p])) {
        if (val !== s[end_p].toLocaleLowerCase()) {
          return false;
        }
        direction = true;
      }
      end_p--;
      continue;
    }
  }
  return true;
};
