/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
	const stringN = N.toString(2);
	let maxLength = 0;
	let start = undefined;
	for (let i = 0; i < stringN.length; i++) {
		if (stringN[i] === '1') {
			if (start === undefined) {
				start = i;
			} else {
				maxLength = Math.max(maxLength, i - start);
				start = i;
			}
		}
    }
    return maxLength
};
// @lc code=end
