/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
/**
 * WARRING 数组可能过长
 * @way 简单粗暴调API法
 * @from self
 * @description 
 * @result Wrong Answer 果然过不去
 * @O 
 * @time 2020-10-12 11:07:27
 */
var addToArrayForm = function(A, K) {
	const numA = parseInt(A.join().replaceAll(',', ''));
	const numAnswer = numA + K;
	return numAnswer.toString().split('');
};
/**
 * @way 正规大整数加法操作
 * @from self
 * @description 
 * @result 
 * @O 
 * @time 2020-10-12 11:07:27
 */
var addToArrayForm = function(A, K) {
	let answer = [];
	let upNumber = 0;
	let arrayK = K.toString().split('');
	let len = Math.min(A.length, arrayK.length);

	for (let i = 0; i < len; i++) {
		let sumIndex = parseInt(A.pop(), 10) + parseInt(arrayK.pop(), 10) + upNumber;
		upNumber = 0;
		let numIndex = 0;
		if (sumIndex >= 10) {
			numIndex = sumIndex % 10;
			upNumber = 1;
		} else {
			numIndex = sumIndex;
		}
		answer.unshift(numIndex);
	}
	while (upNumber !== 0) {
		if (A.length) {
			let sumIndex = (parseInt(A.pop(), 10) || 0) + 1;
			upNumber = 0;
			let numIndex = 0;
			if (sumIndex >= 10) {
				numIndex = sumIndex % 10;
				upNumber = 1;
			} else {
				numIndex = sumIndex;
			}
			answer.unshift(numIndex);
		} else {
			let sumIndex = (parseInt(arrayK.pop(), 10) || 0) + 1;
			upNumber = 0;
			let numIndex = 0;
			if (sumIndex >= 10) {
				numIndex = sumIndex % 10;
				upNumber = 1;
			} else {
				numIndex = sumIndex;
			}
			answer.unshift(numIndex);
		}
	}
	if (A.length) {
		return A.concat(answer);
	} else {
		return arrayK.concat(answer);
	}
};
// @lc code=end
