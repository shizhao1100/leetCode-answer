/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/**
 * @way 
 * @from https://leetcode-cn.com/problems/count-binary-substrings/comments/
 * @description 先统计连续的0和1分别有多少个，如：111100011000，得到4323；在4323中的任意相邻两个数字，取小的一个加起来，就是3+2+2 = 7.
 * @result Accepted
 * @O n
 * @time 2020-04-22 10:28:21
 */
var countBinarySubstrings = function(s) {
	if (s.length <= 1) {
		return 0;
	}
	let answer = 0;
	let groupList = [];
	let point = 0;
	let itemCount = 1;
	for (let i = 1; i < s.length; i++) {
		if (s[i] === s[point]) {
			itemCount++;
		} else {
			groupList.push(itemCount);
			itemCount = 1;
			point = i;
		}
    }
    groupList.push(itemCount);
	for (let i = 0; i < groupList.length - 1; i++) {
		answer = answer + Math.min(groupList[i], groupList[i + 1]);
	}
	return answer;
};
// @lc code=end
