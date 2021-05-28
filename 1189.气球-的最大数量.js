/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let hash = {};
    let template = "balloon";
    for (let i = 0; i < text.length; i++) {
        if (template.includes(text[i])) {
            hash[text[i]] ? hash[text[i]]++ : hash[text[i]] = 1;
        }
    }
    let answer = 0;
    while (true) {
        if (hash['b'] >= 1) {
            hash['b']--;
        } else {
            break;
        }
        if (hash['a'] >= 1) {
            hash['a']--;
        }else{
            break;
        }
        if (hash['n'] >= 1) {
            hash['n']--;
        }else{
            break;
        }
        if (hash['l'] >= 2) {
            hash['l'] -= 2;
        }else{
            break;
        }
        if (hash['o'] >= 2) {
            hash['o'] -= 2;
        }else{
            break;
        }
        answer++;
    }
    return answer;
};
// @lc code=end