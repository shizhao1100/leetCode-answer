/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
// 三种字符分别为 0，10 和 11，
// 那么 数组中出现的所有 0 都表示一个字符的结束位置（无论其为一比特还是两比特）。
// 因此最后一位是否为一比特字符，只和他左侧出现的连续的 1 的个数
// （即它与倒数第二个 0 出现的位置之间的 1 的个数，如果数组中只有 1 个 0，
// 那么就是整个数组的长度减一）有关。如果 1 的个数为偶数个，
// 那么最后一位是一比特字符，如果 1 的个数为奇数个，那么最后一位不是一比特字符。

// 作者：LeetCode
// 链接：https://leetcode-cn.com/problems/1-bit-and-2-bit-characters/solution/1bi-te-yu-2bi-te-zi-fu-by-leetcode/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
var isOneBitCharacter = function(bits) {
	let i = bits.length - 2;
	let count = 0;
	while (i >= 0 && bits[i--] == 1) {
		count++;
	}
	return count % 2 == 0;
};
// @lc code=end
