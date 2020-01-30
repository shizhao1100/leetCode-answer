/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
	function allUpper(word) {
		for (let i = 0; i < word.length; i++) {
			if (65 <= word[i].charCodeAt() && word[i].charCodeAt() <= 90) {
				continue;
			} else {
				return false;
			}
		}
		return true;
	}
	function allLower(word) {
		for (let i = 0; i < word.length; i++) {
			if (97 <= word[i].charCodeAt() && word[i].charCodeAt() <= 122) {
				continue;
			} else {
				return false;
			}
		}
		return true;
	}
	function firstUpper(word) {
		if (word.length > 1) {
			if (allUpper(word[0]) && allLower(word.substring(1))) {
				return true;
			}
		}
	}
	if (allUpper(word) || allLower(word) || firstUpper(word)) {
		return true;
	}
	return false;
};
// @lc code=end
