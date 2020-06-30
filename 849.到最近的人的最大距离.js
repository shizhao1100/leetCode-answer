/*
 * @lc app=leetcode.cn id=849 lang=javascript
 *
 * [849] 到最近的人的最大距离
 */

// @lc code=start
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
	let maxLength = 0;
	let length = 1;
	let start = true;
	let startLength = 0;
	let end = true;
	let endLength = 0;
	for (let i = 0; i < seats.length; i++) {
		if (start) {
			if (seats[i] != 1) {
				startLength++;
			} else {
				start = i;
				break;
			}
		}
	}
	for (let i = seats.length - 1; i >= 0; i--) {
		if (end) {
			if (seats[i] != 1) {
				endLength++;
			} else {
				end = i;
				break;
			}
		}
	}
	for (let i = start + 1; i < end; i++) {
		if (seats[i] === 1) {
			if (length > maxLength) {
				maxLength = length;
			}
			length = 1;
		} else {
			length++;
		}
    }
    if (length > maxLength) {
        maxLength = length;
    }
	return Math.max(startLength, endLength, parseInt(maxLength / 2));
};
// @lc code=end
