/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let string = '';
  while (n) {
    let key = n % 26;
    if (key === 0) {
      string = 'Z' + string;
      n = parseInt(n / 26) - 1;
    } else {
      string = String.fromCharCode((n % 26) + 64) + string;
      n = parseInt(n / 26);
    }
  }
  return string;
};

