/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */

/**
 * @way 骚操作
 * @from 
 * @description 正常的解题模式为 根据闰年的判断方式(能被4整除且不能被100整除或能被400整除的年份为闰年)判断是否为闰年，在切分字符串根据每个月的天数做累加。 
 * @result 
 * @O 
 * @time 2021-05-09 00:02:12
 */
var dayOfYear = function(date) {
	return (
		(new Date(date).getTime() - new Date(new Date(date).getFullYear().toString()).getTime()) / 1000 / 60 / 60 / 24 +
		1
	);
};
// @lc code=end
