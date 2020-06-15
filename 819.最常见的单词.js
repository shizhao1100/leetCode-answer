/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
	const bannedHash = {};
	const wordCountHashTable = {};

	for (let i = 0; i < banned.length; i++) {
		bannedHash[banned[i]] = true;
	}
	const paragraphArray = paragraph
		.toLowerCase()
		.replace(/!/g, ' ')
		.replace(/\?/g, ' ')
		.replace(/'/g, ' ')
		.replace(/,/g, ' ')
		.replace(/\./g, ' ')
		.replace(/;/g, ' ')
		.split(' ');
	for (let i = 0; i < paragraphArray.length; i++) {
		const clearWord = paragraphArray[i];
		if (clearWord && !bannedHash[clearWord]) {
			if (wordCountHashTable[clearWord]) {
				wordCountHashTable[clearWord]++;
			} else {
				wordCountHashTable[clearWord] = 1;
			}
		}
	}
	let max = -Infinity;
	let maxKey = undefined;
	for (let key in wordCountHashTable) {
		if (wordCountHashTable[key] > max) {
			max = wordCountHashTable[key];
			maxKey = key;
		}
	}
	return maxKey;
};
// @lc code=end
