/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
	let arr1HashTable = {};
	let answer = [];
	for (let i = 0; i < arr1.length; i++) {
		if (arr1HashTable[arr1[i]]) {
			arr1HashTable[arr1[i]]++;
		} else {
			arr1HashTable[arr1[i]] = 1;
		}
	}
	for (let i = 0; i < arr2.length; i++) {
		let numCount = arr1HashTable[arr2[i]];
		while (numCount) {
			answer.push(arr2[i]);
			numCount--;
		}
		delete arr1HashTable[arr2[i]];
	}
	let keys = Object.keys(arr1HashTable);
	keys = keys.sort((a, b) => {
		return a - b;
	});
	for (let i = 0; i < keys.length; i++) {
		let numCount = arr1HashTable[keys[i]];
		while (numCount) {
			answer.push(parseInt(keys[i]));
			numCount--;
		}
		delete arr1HashTable[keys[i]];
	}
	return answer;
};
// @lc code=end
