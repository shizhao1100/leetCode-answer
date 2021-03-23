/*
 * @lc app=leetcode.cn id=1108 lang=javascript
 *
 * [1108] IP 地址无效化
 */

// @lc code=start
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
	const noAddress = address.replace(/\./g, '[.]');
	return noAddress;
};
// @lc code=end
