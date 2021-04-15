/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
	let array = new Array(num_people);
	for (let i = 0; i < array.length; i++) {
		array[i] = 0;
	}
	let giveCount = 1;
	let giveIndex = 0;
	while (candies >= giveCount) {
		for (let i = 0; i < array.length; i++) {
			giveIndex = i;
			if (candies > giveCount) {
				array[i] = array[i] + giveCount;
				candies -= giveCount;
				giveCount++;
			} else {
				array[i] = array[i] + candies;
				candies -= giveCount;
				giveCount++;
				break;
			}
		}
	}
	if (candies > 0) {
		if (giveIndex < num_people - 1) {
			array[giveIndex] += candies;
		} else {
			array[0] += candies;
		}
	}
	return array;
};
// @lc code=end
