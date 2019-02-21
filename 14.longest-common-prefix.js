/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.40%)
 * Total Accepted:    46.4K
 * Total Submissions: 147.8K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let answer = "";
    let min_length = Infinity;
    if (strs.length === 0) {
        return "";
    }
    for (let i = 0; i < strs.length; i++) {
        if (min_length > strs[i].length) {
            min_length = strs[i].length;
        }
    }
    for (let j = 0; j < min_length; j++) {
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][j] !== strs[0][j]) {
                return answer;
            }
        }
        answer = answer + strs[0][j];
    }
    return answer;
};
