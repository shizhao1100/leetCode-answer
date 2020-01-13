/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
	function swap(array, i) {
		if (array[i] > array[i - 1]) {
			let temp = array[i - 1];
			array[i - 1] = array[i];
			array[i] = temp;
			return true;
		}
		return false;
	}
	let maxArray = [ -Infinity, -Infinity, -Infinity ];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > maxArray[2] && !maxArray.includes(nums[i])) {
			maxArray[2] = nums[i];
			if (swap(maxArray, 2)) {
				swap(maxArray, 1);
			}
		}
	}
	if (maxArray[2] === -Infinity) {
		return maxArray[0];
    }
    return maxArray[2];
};
// @lc code=end
