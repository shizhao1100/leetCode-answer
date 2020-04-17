/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
	if (!nums.length) return 0;
	let hashTable = {};
	for (let i = 0; i < nums.length; i++) {
		if (hashTable[nums[i]]) {
			hashTable[nums[i]].count++;
			hashTable[nums[i]].list.push(i);
		} else {
			hashTable[nums[i]] = {
				count: 1,
				list: [ i ]
			};
		}
	}
	let maxNum = [ hashTable[nums[0]] ];
	let maxCount = maxNum[0].count;
	for (const item in hashTable) {
		if (hashTable[item].count > maxCount) {
			maxNum = [ hashTable[item] ];
			maxCount = hashTable[item].count;
		} else if (hashTable[item].count === maxCount) {
			maxNum.push(hashTable[item]);
		}
	}
	if (maxCount === 1) {
		return 1;
	}
	let answer = Infinity;
	for (let i = 0; i < maxNum.length; i++) {
		let _list = maxNum[i].list;
		let minLength = _list[_list.length - 1] - _list[0] + 1;
		if (answer > minLength) {
			answer = minLength;
		}
	}
	return answer;
};
// @lc code=end
