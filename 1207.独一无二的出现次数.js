/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hashTable = {};
    let countCheck = {}
    for(let i = 0; i < arr.length; i++){
        if(!hashTable[arr[i]]){
            hashTable[arr[i]] = 0
        }
        hashTable[arr[i]]++
    }
    const keys = Object.keys(hashTable)
    for(let i = 0; i < keys.length; i++){
        if(countCheck[hashTable[keys[i]]]){
            return false
        }
        countCheck[hashTable[keys[i]]] = true
    }
    return true
};
// @lc code=end

