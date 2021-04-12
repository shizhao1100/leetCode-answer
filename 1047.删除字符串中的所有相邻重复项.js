/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
	let arrayS = S.split('');
	let i = 0;
	while (i < arrayS.length) {
		if (arrayS[i] === arrayS[i + 1]) {
			arrayS.splice(i, 2);
			if (i - 1 < 0) {
				i = 0;
			} else {
				i = i - 1;
			}
		} else {
			i++;
		}
	}
	return arrayS.join('');
};
// @lc code=end
