/*
 * @lc app=leetcode.cn id=949 lang=javascript
 *
 * [949] 给定数字能组成的最大时间
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
	let max = -1;
	let time = '';
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			if (j !== i) {
				for (let k = 0; k < 4; k++) {
					if (k !== i && k !== j) {
						let l = 6 - i - j - k;
						let h = A[i] * 10 + A[j];
						if (h > 23) {
							continue;
						}
						let m = A[k] * 10 + A[l];
						if (m > 59) {
							continue;
						}
						let _max = h * 60 + m;
						if (_max > max) {
							max = _max;
							time = `${A[i]}${A[j]}:${A[k]}${A[l]}`;
						}
					}
				}
			}
		}
	}
	if (max === -1) {
		return '';
	}
	return time;
};
// @lc code=end
