/*
 * @lc app=leetcode.cn id=1394 lang=javascript
 *
 * [1394] 找出数组中的幸运数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      hash[arr[i]]++;
    } else {
      hash[arr[i]] = 1;
    }
  }
  let keys = Object.keys(hash);
  let answer = undefined;
  for (let i = 0; i < keys.length; i++) {
    if (hash[keys[i]] == keys[i]) {
      if (answer == undefined || keys[i] > answer) {
        answer = hash[keys[i]];
      }
    }
  }
  if (answer) return answer;
  return -1;
};
// @lc code=end
