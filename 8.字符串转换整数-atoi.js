/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const isFirstWithSpace = function(s, getNumber) {
	if (s === ' ' && !getNumber) {
		return true;
	} else {
		return false;
	}
};
const isFirstWithAdd = function(s, getNumber) {
	if (s === '+' && !getNumber) {
		return true;
	} else {
		return false;
	}
};
const isFirstWithSubtraction = function(s, getNumber) {
	if (s === '-' && !getNumber) {
		return true;
	}
	return false;
};
const isNotNumber = function(s) {
	if (!(s <= '9' && s >= '0')) {
		return true;
	} else {
		return false;
	}
};

/**
 * @way 
 * @from self 
 * @description  就是一个简单状态机 状态一定要理清楚 这里尝试次数过多(通过n次失败来理状态分支、不符合acm规范会罚时)
 * @result Accepted
 * @O n
 * @time 2020-11-02 20:08:57
 */
var myAtoi = function(s) {
	let getNumber = false;
	let lessZero = false;
	let number = 0;
	const max = Math.pow(2, 31) - 1;
	const min = -max - 1;
	for (let i = 0; i < s.length; i++) {
		if (isFirstWithSpace(s[i], getNumber)) {
			continue;
		}
		if (isFirstWithAdd(s[i], getNumber)) {
			getNumber = true;
			continue;
		}
		if (isFirstWithSubtraction(s[i], getNumber)) {
			lessZero = true;
			getNumber = true;
			continue;
		}
		if (isNotNumber(s[i])) {
			return number;
		} else {
			getNumber = true;
			if (lessZero) {
				if (number > 0) {
					number = -number;
				}
				number = number * 10 - parseInt(s[i]);
				if (number < min) {
					return min;
				}
			} else {
				number = number * 10 + parseInt(s[i]);
				if (number > max) {
					return max;
				}
			}
		}
	}
	return number;
};
// @lc code=end
