/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let queue = [];
    if(!s) return 0;
    for(let i=0;i<s.length; i++){
        while(queue.includes(s[i])){
            queue.shift();
        }
        queue.push(s[i])
        if(queue.length>max){
            max = queue.length
        }
    }
    return max;
};
// @lc code=end

