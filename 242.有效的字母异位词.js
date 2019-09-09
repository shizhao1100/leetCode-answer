/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let hashTable = {};
  for (let i = 0; i < s.length; i++) {
    if (hashTable[s[i]]) {
      hashTable[s[i]]++;
    } else {
      hashTable[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (hashTable[t[i]]) {
      if (hashTable[t[i]] === 1) {
        delete (hashTable[t[i]]);
      } else {
        hashTable[t[i]]--;
      }
    } else {
      return false;
    }
  }
  return !Object.keys(hashTable).length;
};
