/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
	let SArray = S.split('');
	let start = 0;
	let end = SArray.length - 1;
	const isAlphabet = /[a-z]|[A-Z]/;
	while (start < end) {
		if (!isAlphabet.test(SArray[start])) {
			start++;
			continue;
		}
		if (!isAlphabet.test(SArray[end])) {
			end--;
			continue;
		}
		let temp = SArray[start];
		SArray[start] = SArray[end];
		SArray[end] = temp;
		start++;
		end--;
	}
	return SArray.join('');
};
// @lc code=end
