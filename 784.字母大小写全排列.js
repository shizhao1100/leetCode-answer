/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
	let answer = [];
	for (let i = 0; i < S.length; i++) {
		if (
			(97 <= S[i].charCodeAt() && S[i].charCodeAt() <= 122) ||
			(65 <= S[i].charCodeAt() && S[i].charCodeAt() <= 90)
		) {
			let len = answer.length;
			answer = answer.concat(answer);
			for (let j = 0; j < (len || 1); j++) {
				answer[j] = (answer[j] || '') + S[i].toLowerCase();
				answer[(len || 1) + j] = (answer[(len || 1) + j] || '') + S[i].toUpperCase();
			}
		} else {
			if (!answer.length) answer.push(S[i]);
			else
				for (let j = 0; j < answer.length; j++) {
					answer[j] = answer[j] + S[i];
				}
		}
	}
	return answer;
};
// @lc code=end
