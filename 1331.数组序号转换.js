/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const arrSorted = [].concat(arr).sort((a, b) => {
    return a - b;
  });
  const sortedHash = {};
  let k = 1;
  sortedHash[arrSorted[0]] = 1;
  for (let i = 1; i < arrSorted.length; i++) {
    if (arrSorted[i] !== arrSorted[i - 1]) k++;
    sortedHash[arrSorted[i]] = k;
  }
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    answer.push(sortedHash[arr[i]]);
  }
  return answer;
};
// @lc code=end
