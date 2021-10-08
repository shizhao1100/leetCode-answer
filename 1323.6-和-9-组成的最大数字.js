/*
 * @lc app=leetcode.cn id=1323 lang=javascript
 *
 * [1323] 6 和 9 组成的最大数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
function replacePart(str, p, r) {
  return str.slice(0, p) + r + str.slice(p + 1);
}
var maximum69Number = function (num) {
  const numString = num.toString();
  if (!numString.includes("6")) return num;
  for (let i = 0; i < numString.length; i++) {
    if (numString[i] === "6") {
      return parseInt(replacePart(numString, i, 9));
    }
  }
};
// @lc code=end
