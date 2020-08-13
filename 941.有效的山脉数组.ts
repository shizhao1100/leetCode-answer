/*
 * @lc app=leetcode.cn id=941 lang=typescript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
function validMountainArray(A: number[]): boolean {
	let up = true;
	let left = false;
	let right = false;
	for (let i = 1; i < A.length; i++) {
		if (up && A[i] > A[i - 1]) {
			left = true;
			continue;
		} else if (A[i] < A[i - 1]) {
			right = true;
			up = false;
			continue;
		} else {
			return false;
		}
	}
	return right && left;
}
// @lc code=end
