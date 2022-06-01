/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const hash = {};
  const resultWithSumIndex = [];
  const result = [];
  let minSumIndex = Infinity;
  for (let i = 0; i < list1.length; i++) {
    hash[list1[i]] = i;
  }
  for (let i = 0; i < list2.length; i++) {
    if (hash[list2[i]] !== undefined) {
      resultWithSumIndex.push([list2[i], i + hash[list2[i]]]);
      if (minSumIndex > i + hash[list2[i]]) {
        minSumIndex = i + hash[list2[i]];
      }
    }
  }
  for (let i = 0; i < resultWithSumIndex.length; i++) {
    if (resultWithSumIndex[i][1] === minSumIndex) {
      result.push(resultWithSumIndex[i][0]);
    }
  }
  return result;
};
// @lc code=end
