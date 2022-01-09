/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let answer = ''
    const M = parseInt(num / 1000);
    for (let i = 0; i < M; i++) {
        answer += 'M'
    }
    num = num % 1000;
    const CM = parseInt(num / 900);
    if (CM) {
        answer += 'CM'
        num = num % 900;
    }
    const D = parseInt(num / 500);
    if (D) {
        answer += 'D'
        num = num % 500;
    }
    const CD = parseInt(num / 400);
    if (CD) {
        answer += 'CD'
        num = num % 400;
    }
    const C = parseInt(num / 100);
    for (let i = 0; i < C; i++) {
        answer += 'C'
    }
    num = num % 100;

    const XC = parseInt(num / 90);
    if (XC >= 1) {
        answer += 'XC'
        num = num % 90;
    }
    const L = parseInt(num / 50);
    if (L >= 1) {
        answer += 'L'
        num = num % 50;
    }
    const XL = parseInt(num / 40);
    if (XL >= 1) {
        answer += 'XL'
        num = num % 40;
    }
    const X = parseInt(num / 10);
    for (let i = 0; i < X; i++) {
        answer += 'X'
    }
    num = num % 10;

    const IX = parseInt(num / 9);
    if (IX >= 1) {
        answer += 'IX'
        num = num % 9;
    }
    const V = parseInt(num / 5);
    if (V >= 1) {
        answer += 'V'
        num = num % 5;
    }
    const IV = parseInt(num / 4);
    if (IV >= 1) {
        answer += 'IV'
        num = num % 4;
    }
    for (let i = 0; i < num; i++) {
        answer += 'I'
    }
    return answer
};
// @lc code=end