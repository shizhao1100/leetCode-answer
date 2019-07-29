/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (string_S, string_T) {
  const _isIsomorphic = function (s, t) {
    let hashArray = new Array(s.length);
    let hashEqual = new Array();
    for (let i = 0; i < s.length; i++) {
      if (!hashArray[i]) {
        let equalChar = [i];
        for (let j = i + 1; j < s.length; j++) {
          if (s[i] === s[j]) {
            hashArray[j] = true;
            equalChar.push(j);
          }
        }
        hashEqual.push(equalChar);
        hashArray[i] = true;
      }
    }
    for (let i = 0; i < hashEqual.length; i++) {
      let char = t[hashEqual[i][0]];
      for (let j = 1; j < hashEqual[i].length; j++) {
        if (t[hashEqual[i][j]] !== char) {
          return false;
        }
      }
    }
    return true;
  }
  return _isIsomorphic(string_S, string_T) && _isIsomorphic(string_T, string_S);
};
