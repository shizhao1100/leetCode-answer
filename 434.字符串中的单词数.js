/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
	let stringCount = 0;
	if (!s.length) return 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] !== ' ' && (s[i - 1] === ' ' || i === 0)) {
			stringCount++;
		}
	}
	return stringCount;
};
// @lc code=end
