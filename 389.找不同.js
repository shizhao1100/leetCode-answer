/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const st = s + t;
  const stLen = st.length
  let answer = st[0].charCodeAt();
  for (let i = 1; i < stLen; i++) {
    answer = answer ^ st[i].charCodeAt();
  }
  return String.fromCharCode(answer) ;
};
// @lc code=end

