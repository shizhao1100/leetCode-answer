/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
	let hashTable = {};
	const ransomNoteLen = ransomNote.length;
    const magazineLen = magazine.length;
    
	for (let i = 0; i < magazineLen; i++) {
		if (hashTable[magazine[i]]) {
			hashTable[magazine[i]]++;
		} else {
			hashTable[magazine[i]] = 1;
		}
	}
	for (let i = 0; i < ransomNoteLen; i++) {
		if (hashTable[ransomNote[i]]) {
			hashTable[ransomNote[i]]--;
		} else {
			return false;
		}
	}
	return true;
};
// @lc code=end
