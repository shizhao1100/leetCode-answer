/*
 * @lc app=leetcode.cn id=686 lang=javascript
 *
 * [686] 重复叠加字符串匹配
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
	let k = parseInt(B.length / A.length);
	let fullA = '';
	for (let i = 0; i < k; i++) {
		fullA = fullA + A;
	}
	if (fullA.includes(B)) {
		return k;
	} else if ((fullA + A).includes(B)) {
		return k + 1;
	} else if ((fullA + A + A).includes(B)) {
		return k + 2;
	} else {
		return -1;
	}
};
// @lc code=end
