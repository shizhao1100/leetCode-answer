/*
 * @lc app=leetcode.cn id=1408 lang=javascript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  let answer = [];
  words = words.sort((a, b) => {
    return a.length - b.length;
  });
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].includes(words[i])) {
        answer.push(words[i]);
        break;
      }
    }
  }
  return answer;
};
// @lc code=end
