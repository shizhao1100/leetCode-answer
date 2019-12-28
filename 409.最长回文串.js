/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
	let answer = 0;
	let hashTable = {};
	for (let i = 0; i < s.length; i++) {
		if (hashTable[s[i]]) {
			hashTable[s[i]] = false;
			answer = answer + 2;
		} else {
			hashTable[s[i]] = true;
		}
	}
	for (key in hashTable) {
		if (hashTable[key]) {
			answer = answer + 1;
			break;
		}
	}
	return answer;
};
// @lc code=end
