/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
function checkTwoWords(words1, words2, orderHash) {
	let firstLength = words1.length;
	let secondLength = words2.length;
	for (let i = 0; i < Math.min(firstLength, secondLength); i++) {
		if (orderHash[words1[i]] < orderHash[words2[i]]) {
			return true;
		} else if (orderHash[words1[i]] > orderHash[words2[i]]) {
			return false;
		} else {
			continue;
		}
	}
	return firstLength < secondLength;
}
var isAlienSorted = function(words, order) {
	let orderHash = {};
	for (let i = 0; i < order.length; i++) {
		orderHash[order[i]] = i;
	}
	for (let i = 0; i < words.length - 1; i++) {
		if (checkTwoWords(words[i], words[i + 1], orderHash)) {
			continue;
		} else {
			return false;
		}
	}
	return true;
};
// @lc code=end
