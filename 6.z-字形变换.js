/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if(numRows===1) return s
    let answer = ''
    const hashTable = {}
    let index = 0
    let i = 0;
    let J = 0;
    let j = 0;
    while (index < s.length) {
        if (j % numRows === 0) {
            hashTable[`${i},${j}`] = s[index]
            index++
            i++
            if (i === numRows) {
                i -= 2;
                j++;
                J = j;
            }
        } else {
            hashTable[`${i},${j}`] = s[index]
            if (i == 0) {
                i++;
            } else {
                i--;
            }
            j++;
            index++
            J = j;
        }
    }
    for (let j = 0; j < numRows; j++) {
        for (let i = 0; i <= J; i++) {
            if (hashTable[`${j},${i}`]) {
                answer += hashTable[`${j},${i}`]
            }
        }
    }
    return answer;
};
// @lc code=end