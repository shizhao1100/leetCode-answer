/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
	let first = -Infinity;
	let second = -Infinity;
	let third = -Infinity;

	let last = Infinity;
	let end = Infinity;
	function swapSecond(num) {
		third = second;
		second = num;
	}
	function swapFirst(num) {
		second = first;
		first = num;
	}
	function swapEnd(num) {
		last = end;
		end = num;
	}
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > first) {
			swapSecond(second);
			swapFirst(nums[i]);
		} else if (nums[i] > second) {
			swapSecond(nums[i]);
		} else if (nums[i] > third) {
			third = nums[i];
		}

		if (nums[i] < end) {
			swapEnd(nums[i]);
		} else if (nums[i] < last) {
			last = nums[i];
		}
	}

	let answerF = 1;
    let answerE = 1;
    
	if (isFinite(first)) {
        answerF = answerF * first;
        answerE = answerE * first;
	}
	if (isFinite(second)) {
		answerF = answerF * second;
	}
	if (isFinite(third)) {
		answerF = answerF * third;
	}
	if (isFinite(end)) {
		answerE = answerE * end;
	}
	if (isFinite(last)) {
		answerE = answerE * last;
	}
	return Math.max(answerF, answerE);
};
// @lc code=end
