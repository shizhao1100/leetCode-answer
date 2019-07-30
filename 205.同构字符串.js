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
/*
* 方法：hash-table
* 细节：维护一个hash表记录一样的字母的索引。
* 缺点：比如"ab",索引为[[0],[1]]检测"ab"时检测不出来，需要重新检测'ab','aa',
* 且前置条件需要将一个字符串完全解析，再解析另外一个时做对比
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
/*
* 方法：hash-table
* 细节：同构代表两个字符串中每个位置上字符在自身第一次出现的索引相同
*/
var isIsomorphic = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false;
  }
  return true;
}
