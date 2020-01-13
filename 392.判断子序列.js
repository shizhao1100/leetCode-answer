/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
	let i = 0;
	let j = 0;

	while (j < t.length) {
		if (s[i] === t[j]) {
			i++;
		}
		if (i >= s.length) {
			return true;
		}
		j++;
	}
	if (s === '' && t === '') {
		return true;
	}
	return false;
};

// @lc code=end
