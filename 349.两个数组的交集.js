/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/*
* 方法：hash-table
* 细节：维护一个hash-table来记录已有的数字
*/
var intersection = function(nums1, nums2) {
	let numsHash = {};
	let anwser = [];
	for (let i = nums1.length - 1; i >= 0; i--) {
		if (!numsHash[nums1[i]]) {
			numsHash[nums1[i]] = true;
		}
	}
	for (let i = nums2.length - 1; i >= 0; i--) {
		if (numsHash[nums2[i]] && anwser.indexOf(nums2[i]) === -1) {
			anwser.push(nums2[i]);
		}
	}
	return anwser;
};
// @lc code=end
