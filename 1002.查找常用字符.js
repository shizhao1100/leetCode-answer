/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找常用字符
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    if (!A.length) return [];
    let hashTable = {};
    for (let j = 0; j < A[0].length; j++) {
        if (hashTable[A[0][j]]) {
            hashTable[A[0][j]]++;
        } else {
            hashTable[A[0][j]] = 1;
        }
    }

    for (let i = 1; i < A.length; i++) {
        let tempTable = {};
        for (let j = 0; j < A[i].length; j++) {
            if (tempTable[A[i][j]]) {
                tempTable[A[i][j]]++;
            } else {
                tempTable[A[i][j]] = 1;
            }
        }
        let keys = Object.keys(hashTable)
        for (let k = 0; k < keys.length; k++) {
            if (!tempTable[keys[k]]) {
                delete hashTable[keys[k]];
                continue;
            }
            if (tempTable[keys[k]] < hashTable[keys[k]]) {
                hashTable[keys[k]] = tempTable[keys[k]];
            }
        }
    }
    let answer = [];
    let keys = Object.keys(hashTable)
    for (let i = 0; i < keys.length; i++) {
        for (let j = 0; j < hashTable[keys[i]]; j++) {
            answer.push(keys[i])
        }
    }
    return answer
};
// @lc code=end

