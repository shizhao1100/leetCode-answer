/*
 * @lc app=leetcode.cn id=1299 lang=javascript
 *
 * [1299] 将每个元素替换为右侧最大元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let answer = [-1]
  if (arr.length === 1) return answer
  let maxValue = arr[arr.length - 1]
  for (i = arr.length - 2; i >= 0; i--) {
    answer.push(maxValue)
    if (arr[i] > maxValue) {
      maxValue = arr[i]
    }
  }
  return answer.reverse()
};
// @lc code=end

