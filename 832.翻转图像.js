/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
	for (let i = 0; i < A.length; i++) {
		A[i].reverse();
		for (let j = 0; j < A[i].length; j++) {
			A[i][j] = A[i][j] ? 0 : 1;
		}
	}
	return A;
};
// @lc code=end
