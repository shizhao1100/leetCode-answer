/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
	let hashCharts = {};
	for (let i = 0; i < chars.length; i++) {
		hashCharts[chars[i]] ? hashCharts[chars[i]]++ : (hashCharts[chars[i]] = 1);
	}
	let answer = 0;
	for (let i = 0; i < words.length; i++) {
		let copyHashTable = Object.assign({}, hashCharts);
		let j = 0;
		for (; j < words[i].length; j++) {
			if (copyHashTable[words[i][j]]) {
				copyHashTable[words[i][j]]--;
			} else {
				break;
			}
		}
		if (j == words[i].length) {
			answer += words[i].length;
		}
	}
	return answer;
};
// @lc code=end
