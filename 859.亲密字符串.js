/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */

// 就分情况讨论
var buddyStrings = function(A, B) {
	let differentCharHash = '';

	let hashTable = {};
	let doubleCharCheck = false;

	if (A.length !== B.length) {
		return false;
	}
	let hanmingDistance = 0;
	for (let i = 0; i < A.length; i++) {
		if (hashTable[A[i]]) {
			hashTable[A[i]]++;
			doubleCharCheck = true;
		} else {
			hashTable[A[i]] = true;
		}
		if (A[i] !== B[i]) {
			if (differentCharHash.includes(`B${A[i]}`)) {
				differentCharHash = differentCharHash.replace(`B${A[i]}`, '');
			} else {
				differentCharHash += `A${A[i]}`;
			}

			if (differentCharHash.includes(`A${B[i]}`)) {
				differentCharHash = differentCharHash.replace(`A${B[i]}`, '');
			} else {
				differentCharHash += `B${B[i]}`;
			}

			hanmingDistance++;
			if (hanmingDistance > 2) {
				return false;
			}
		}
    }
    // 就两种情况成立

    // 字符串距离为2 且 字符串之间的差异可以相互抵消
    // 字符串距离为0 且 字符串中有两个相同的元素用于交换
	if ((hanmingDistance === 2 && differentCharHash.length == 0) || (hanmingDistance === 0 && doubleCharCheck)) {
		return true;
	}
	return false;
};
// @lc code=end
