/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
	function _validPalindrome(str, deleted) {
		let start = 0;
		let end = str.length - 1;
		while (end > start) {
			if (str[end] === str[start]) {
				end--;
				start++;
				continue;
			} else {
				if (deleted) {
					return false;
				}
				return (
					_validPalindrome(str.slice(start + 1, end + 1), true) ||
					_validPalindrome(str.slice(start, end), true)
				);
			}
		}
		return true;
	}
	return _validPalindrome(s, false);
};
// @lc code=end
