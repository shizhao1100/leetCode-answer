/*
 * @lc app=leetcode.cn id=1346 lang=javascript
 *
 * [1346] 检查整数及其两倍数是否存在
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let hashNum = {};
  for (var i = 0; i < arr.length; i++) {
    if (!hashNum[arr[i]]) {
      hashNum[arr[i]] = 1;
    } else {
      hashNum[arr[i]]++;
    }
  }
  const keys = Object.keys(hashNum);
  for (var i = 0; i < keys.length; i++) {
    if (hashNum[keys[i] * 2]) {
      if (keys[i] == 0) {
        if (hashNum[0] >= 2) {
          return true;
        }
      } else {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end
