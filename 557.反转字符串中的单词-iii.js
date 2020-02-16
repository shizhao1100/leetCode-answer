/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let answer = '';
  var stringArray = s.split(' ');
  for (let i = 0; i < stringArray.length; i++) {
    let charArray = stringArray[i].split('');
    answer = answer + charArray.reverse().join('') + ' ';
  }
  return answer.substring(0, answer.length - 1)
};
// @lc code=end

