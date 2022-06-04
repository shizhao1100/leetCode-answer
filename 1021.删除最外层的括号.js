/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const treeArray = [];
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    let arrayItem = [];
    if (s[i] === "(") {
      arrayItem[index] = "(";
      treeArray.push(arrayItem);
      index++;
    } else {
      index--;
      arrayItem[index] = ")";
      treeArray.push(arrayItem);
    }
  }
  let result = "";
  for (let i = 0; i < treeArray.length; i++) {
    for (let j = 1; j < treeArray[i].length; j++) {
      result += treeArray[i][j] || "";
    }
  }
  return result;
};
// @lc code=end
