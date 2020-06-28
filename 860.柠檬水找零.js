/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
	let coins = '';
	for (let i = 0; i < bills.length; i++) {
		if (bills[i] === 5) {
			coins += '5';
		}
		if (bills[i] === 10) {
			if (coins.includes('5')) {
				coins += '10';
				coins = coins.replace('5', '');
			} else return false;
		}
		if (bills[i] === 20) {
			if (coins.includes('5') && coins.includes('10')) {
				coins = coins.replace('5', '');
				coins = coins.replace('10', '');
				continue;
			}
			if (coins.includes('5')) {
				coins = coins.replace('5', '');
				if (coins.includes('5')) {
					coins = coins.replace('5', '');
					if (coins.includes('5')) {
						coins = coins.replace('5', '');
					} else return false;
				} else return false;
			} else return false;
		}
	}
	return true;
};
// @lc code=end
