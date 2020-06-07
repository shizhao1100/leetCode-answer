/*
 * @lc app=leetcode.cn id=840 lang=javascript
 *
 * [840] 矩阵中的幻方
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
function checkSum(grid, i, j) {
	return (
		grid[i - 1][j - 1] + grid[i - 1][j] + grid[i - 1][j + 1] === 15 &&
		grid[i][j - 1] + grid[i][j] + grid[i][j + 1] === 15 &&
		grid[i + 1][j - 1] + grid[i + 1][j] + grid[i + 1][j + 1] === 15 &&
		grid[i - 1][j - 1] + grid[i][j - 1] + grid[i + 1][j - 1] === 15 &&
		grid[i - 1][j] + grid[i][j] + grid[i + 1][j] === 15 &&
		grid[i - 1][j + 1] + grid[i][j + 1] + grid[i + 1][j + 1] === 15 &&
		grid[i - 1][j - 1] + grid[i][j] + grid[i + 1][j + 1] === 15 &&
		grid[i - 1][j + 1] + grid[i][j] + grid[i + 1][j - 1] === 15
	);
}
function checkNum(grid, i, j) {
	let checklist = [ false, false, false, false, false, false, false, false ];
	for (let i1 = i - 1; i1 <= i + 1; i1++) {
		for (let j1 = j - 1; j1 <= j + 1; j1++) {
			checklist[grid[i1][j1] - 1] = true;
		}
	}
	for (let k = 0; k < checklist.length; k++) {
		if (!checklist[k]) return false;
	}
	return true;
}
var numMagicSquaresInside = function(grid) {
	let answer = 0;
	for (let i = 1; i < grid.length - 1; i++) {
		for (let j = 1; j < grid[i].length - 1; j++) {
			if (grid[i][j] === 5 && checkSum(grid, i, j) && checkNum(grid, i, j)) {
				answer++;
			}
		}
	}
	return answer;
};
// @lc code=end
