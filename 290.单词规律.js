/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
/*
* 方法：hash-table
* 细节：同构代表两个字符串中每个位置上字符在自身第一次出现的索引相同,
* 时间复杂度： 在两个字符串匹配的时候达到 On^2 
*/
var wordPattern = function (pattern, str) {
  let strs = str.split(' ');
  if (pattern.length !== strs.length) return false
  for (let i = 0; i < pattern.length; i++) {
    if (pattern.indexOf(pattern[i]) !== strs.indexOf(strs[i])) return false;
  }
  return true;
};

/*
* 方法：hash-tabl
* 细节：双hashtable法·  做左侧字符串的hashtable，右侧字符串的hashtable。对比两个hashtable表
* 时间复杂度：2*On
*/
var wordPattern = function (pattern, str) {
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

  let strs = str.split(' ');
  if (pattern.length !== strs.length) return false

  return _isIsomorphic(pattern, strs) && _isIsomorphic(strs, pattern);
};

// TODO 撸一遍KMP算法、indexof算法