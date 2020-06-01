/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */

/**
 * @way 字符串扩充
 * @from https://leetcode-cn.com/problems/rotate-string/solution/xuan-zhuan-zi-fu-chuan-by-leetcode/
 * @description 将字符串A首位相连，理论上就构筑了所有的旋转组合，自需要去doubleA中寻找B就可以
 * @result Accepted
 * @O N
 * @time 2020-06-01 17:20:52
 */
var rotateString = function(A, B) {
	return A.length == B.length && (A + A).includes(B);
};
// @lc code=end
