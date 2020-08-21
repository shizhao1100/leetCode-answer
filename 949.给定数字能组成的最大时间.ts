/*
 * @lc app=leetcode.cn id=949 lang=typescript
 *
 * [949] 给定数字能组成的最大时间
 */
// @lc code=start
function permutation(A: number[], fn: Function, index: number): string | void {
	for (let i = 0; i < A.length; i++) {
		if (A.length === index) {
			const t = A.splice(i, 1)[0];
			const timeString = t.toString() + permutation(A, fn, index);
			A.splice(i, 0, t);
			console.log(timeString);
			fn(timeString);
		} else if (A.length > 1) {
			const t = A.splice(i, 1)[0];
			const subTimeString = t.toString() + permutation(A, fn, index);
			A.splice(i, 0, t);
			return subTimeString;
		} else {
			return A[i].toString();
		}
	}
}
function changeTimeToCount(timeString: string): number {
	return parseInt(timeString.substr(0, 2)) * 60 + parseInt(timeString.substr(2, 4));
}
function largestTimeFromDigits(A: number[]): string {
	const maxTime = 60 * 24 - 1;
	let answer = -1;
	let answeRenter = '';
	function checkTime(timeString: string): void {
		const timeCount = changeTimeToCount(timeString);
		if (timeCount <= maxTime) {
			if (timeCount > answer) {
				answeRenter = timeString.substr(0, 2) + ':' + timeString.substr(2, 4);
			}
		}
	}
	permutation(A, checkTime, 4);
	return answeRenter;
}
largestTimeFromDigits([ 1, 2, 3, 4 ]);
// @lc code=end
