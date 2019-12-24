/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	let hashTable = {};
	const sLen = s.length;
	for (let i = 0; i < sLen; i++) {
		if (hashTable[s[i]] === undefined) {
			hashTable[s[i]] = true;
		} else if (hashTable[s[i]] === true) {
			hashTable[s[i]] = false;
		}
	}
	for (let i = 0; i < sLen; i++) {
		if (hashTable[s[i]]) {
			return i;
		}
	}
	return -1;
};
// @lc code=end
