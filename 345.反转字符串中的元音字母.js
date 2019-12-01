/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let stringArray = s.split('');
	const reverseList = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ];
	let start = 0;
	let end = stringArray.length;
	while (end > start) {
		while (reverseList.indexOf(stringArray[start]) === -1 && end > start) {
			start++;
		}
		while (reverseList.indexOf(stringArray[end]) === -1 && end > start) {
			end--;
		}
		let temp = stringArray[start];
		stringArray[start] = stringArray[end];
		stringArray[end] = temp;
		start++;
		end--;
    }
    return stringArray.join('');
};
// @lc code=end
