/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  const nString = n.toString(2);
  if (nString === '0') {
    return false;
  }
  for (let i = 1; i < nString.length; i++) {
    if (nString[i] !== '0') {
      return false;
    }
  }
  return true;
};
