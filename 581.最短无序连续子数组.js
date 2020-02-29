/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * @way 排序法
 * @from https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/solution/zui-duan-wu-xu-lian-xu-zi-shu-zu-by-leetcode/
 * @description 对数组排序,对比排序数组与原数组
 * @result Accepted
 * @O nlogn
 * @time 2020-03-01 01:08:50
 */
var findUnsortedSubarray = function(nums) {
	let numsSort = [].concat(nums).sort((a, b) => {
		return a - b;
	});
	let start = 0;
	let end = nums.length - 1;
	while (nums[start] === numsSort[start] && start < nums.length) {
		start++;
	}
	while (nums[end] === numsSort[end] && end >= 0) {
		end--;
	}

	return end > start ? end - start + 1 : 0;
};

/**
 * @param {number[]} nums
 * @return {number}
 * @way 栈
 * @from https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/solution/zui-duan-wu-xu-lian-xu-zi-shu-zu-by-leetcode/
 * @description 对升序数组正确入栈，
 * 如果下一个值大于栈顶元素则栈顶元素出栈。计算出最小元素的正确位置。
 * 同理计算出最大元素所在的正确位置。
 * @result Accepted
 * @O n
 * @time 2020-03-01 01:08:50
 */
var findUnsortedSubarray = function(nums) {
	if (nums.length <= 1) return 0;
	let stack = [];
	let start = nums.length - 1;
	let end = nums.length - 1;
	for (let i = 0; i < nums.length; i++) {
		while (stack.length != 0 && stack[stack.length - 1] > nums[i]) {
			stack.pop();
			start > stack.length ? (start = stack.length) : null;
		}
		stack.push(nums[i]);
	}
	stack = [];
	for (let i = nums.length - 1; i >= 0; i--) {
		while (stack.length != 0 && stack[stack.length - 1] < nums[i]) {
			stack.pop();
			end > stack.length ? (end = stack.length) : null;
		}
		stack.push(nums[i]);
	}
	const answer = nums.length - start - end;
	return answer > 0 ? answer : 0;
};
// @lc code=end
