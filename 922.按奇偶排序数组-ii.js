/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
	let notOddIndex = [];
	let notEvenIndex = [];
	function swap() {
		if (notOddIndex[0] !== undefined && notEvenIndex[0] !== undefined) {
			let temp = A[notOddIndex[0]];
			A[notOddIndex[0]] = A[notEvenIndex[0]];
			A[notEvenIndex[0]] = temp;
			notOddIndex.shift();
			notEvenIndex.shift();
		}
	}
	for (let i = 0; i < A.length; i++) {
		if (A[i] % 2 == 0 && i % 2 == 0) {
			continue;
		}
		if (A[i] % 2 != 0 && i % 2 != 0) {
			continue;
		}
		if (A[i] % 2 == 0 && i % 2 != 0) {
			notOddIndex.push(i);
			swap();
		}
		if (A[i] % 2 != 0 && i % 2 == 0) {
			notEvenIndex.push(i);
			swap();
		}
	}
	return A;
};
// @lc code=end
