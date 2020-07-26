/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
function checkMinGroupCount(min, hashTable) {
	for (let item in hashTable) {
		if (hashTable[item] === min || hashTable[item] % min === 0) {
			continue;
		}
		return false;
	}
	return true;
}
var hasGroupsSizeX = function(deck) {
	let hashTable = {};
	let minGroupCount = Infinity;
	for (let i = 0; i < deck.length; i++) {
		if (hashTable[deck[i]] === undefined) {
			hashTable[deck[i]] = 1;
		} else {
			hashTable[deck[i]]++;
		}
	}
	for (let item in hashTable) {
		if (hashTable[item] < 2) {
			return false;
		} else {
			if (hashTable[item] < minGroupCount) {
				minGroupCount = hashTable[item];
			}
		}
	}
	let i = 1;
	do {
		if ((minGroupCount / i) % 1 === 0 && checkMinGroupCount(minGroupCount / i, hashTable)) return true;
		i++;
	} while (minGroupCount / i > 1);
	return false;
};
// @lc code=end
