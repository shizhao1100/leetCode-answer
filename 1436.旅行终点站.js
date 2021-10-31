/*
 * @lc app=leetcode.cn id=1436 lang=javascript
 *
 * [1436] 旅行终点站
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const source = {};
  const target = {};
  for (let i = 0; i < paths.length; i++) {
    source[paths[i][0]] = true;
    target[paths[i][1]] = true;
  }
  const keys = Object.keys(target);
  for (let i = 0; i < keys.length; i++) {
    if (!source[keys[i]]) {
      return keys[i];
    }
  }
  return 0;
};
// @lc code=end
