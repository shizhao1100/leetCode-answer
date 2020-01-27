/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let result = [];
  let l1 = 'qwertyuiopQWERTYUIOP';
  let l2 = 'asdfghjklASDFGHJKL';
  let l3 = 'zxcvbnmZXCVBNM';
  for (let i = 0; i < words.length; i++) {
    let line = undefined;
    if (l1.includes(words[i][0])) {
      line = l1;
    } else if (l2.includes(words[i][0])) {
      line = l2;
    } else if (l3.includes(words[i][0])) {
      line = l3;
    } else {
      line = '';
    }
    let j = 0;
    while (line.includes(words[i][j])) {
      j++;
    }
    if (j === words[i].length) {
      result.push(words[i]);
    }
  }
  return result;
};
// @lc code=end

