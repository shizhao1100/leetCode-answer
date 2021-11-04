/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const result = arr.sort((a, b) => {
    const aOneLength = a.toString(2).replace(/0/g, "").length;
    const bOneLength = b.toString(2).replace(/0/g, "").length;
    if (aOneLength > bOneLength) {
      return 1;
    } else if (aOneLength < bOneLength) {
      return -1;
    } else {
      return a - b;
    }
  });
  return result;
};
// @lc code=end
