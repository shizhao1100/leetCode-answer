/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (46.05%)
 * Total Accepted:    16.2K
 * Total Submissions: 35K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let carry = 0;
    let answer = [];
    a = a.split('');
    b = b.split('');
    while (a.length || b.length) {
        let num = (parseInt(a[a.length - 1]) || 0) + (parseInt(b[b.length - 1]) || 0) + carry;
        if (num === 3) {
            answer.unshift(1);
            carry = 1;
        } else if (num === 2) {
            answer.unshift(0);
            carry = 1;
        } else {
            carry = 0;
            answer.unshift(num);
        }
        a.length ? a.pop() : null;
        b.length ? b.pop() : null;
    }
    if (carry === 1) {
        answer.unshift(carry);
    }
    return answer.join('');
};


