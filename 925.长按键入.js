/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
	let namePoint = 0;
	let typedPoint = 0;
	while (typedPoint < typed.length) {
		if (name[namePoint] === typed[typedPoint]) {
			namePoint++;
			typedPoint++;
		} else {
			if (name[namePoint - 1] === typed[typedPoint]) {
				typedPoint++;
			} else {
				return false;
			}
		}
	}
	if (namePoint === name.length && typedPoint === typed.length) return true;
	return false;
};
// @lc code=end
