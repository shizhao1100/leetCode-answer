/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
	const l = nums.length;
	if (!l) return [];
	const w = nums[0].length;
	if (l * w !== r * c) return nums;
	let answer = new Array(r);
	let a_l = -1;
	let a_w = c;
	for (let i = 0; i < l; i++) {
		for (let j = 0; j < w; j++) {
			if (a_w === c) {
				a_l++;
				a_w = 0;
				answer[a_l] = new Array(c);
			}
			answer[a_l][a_w] = nums[i][j];
			a_w++;
		}
	}
	return answer;
};
// @lc code=end
