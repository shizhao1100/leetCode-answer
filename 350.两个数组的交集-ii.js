/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
	nums1 = nums1.sort();
	nums2 = nums2.sort();
	let i = nums1.length;
	let j = nums2.length;
	while (i >= 0 && j >= 0) {}
};
/*
* 方法：hash-table
* 细节：维护一个hash-table来记录已有的数字个数
*/
var intersect = function(nums1, nums2) {
	let numsHash = {};
	let anwser = [];
	for (let i = nums1.length - 1; i >= 0; i--) {
		if (numsHash[nums1[i]] === undefined) {
			numsHash[nums1[i]] = 1;
		} else {
			numsHash[nums1[i]]++;
		}
	}
	for (let i = nums2.length - 1; i >= 0; i--) {
		if (numsHash[nums2[i]]) {
			numsHash[nums2[i]]--;
			anwser.push(nums2[i]);
		}
	}
	return anwser;
};
// @lc code=end
