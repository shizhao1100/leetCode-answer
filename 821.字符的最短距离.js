/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
	let answer = [];
	for (let i = 0; i < S.length; i++) {
		if (S[i] === C) {
			answer[i] = 0;
		}
	}
	let prev = undefined;
	for (let i = 0; i < S.length; i++) {
		if (answer[i] === 0) {
			prev = i;
		} else if (prev !== undefined && answer[i] === undefined) {
			answer[i] = i - prev;
		}
	}
	prev = undefined;
	for (let i = S.length - 1; i >= 0; i--) {
		if (answer[i] === 0) {
			prev = i;
		} else if (prev !== undefined) {
			if (answer[i] === undefined) {
				answer[i] = prev - i;
			} else {
				answer[i] = Math.min(prev - i, answer[i]);
			}
		}
	}
	return answer;
};
// @lc code=end
