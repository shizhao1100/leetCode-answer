/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
	let answer = [];
	let char = S[0];
	let charStart = 0;
	let charCount = 1;
	let i = 1;
	for (i = 1; i < S.length; i++) {
		if (S[i] === char) {
			charCount++;
		} else {
			if (charCount >= 3) {
				answer.push([ charStart, i - 1 ]);
			}
			char = S[i];
			charCount = 1;
			charStart = i;
		}
	}
	if (charCount >= 3) {
		answer.push([ charStart, i - 1 ]);
	}
	return answer;
};
largeGroupPositions("aaa")
// @lc code=end
