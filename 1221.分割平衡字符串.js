/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let rCount = 0;
    let lCount = 0;
    let answer = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='L'){
            lCount++;
        }else{
            rCount++;
        }
        if(rCount===lCount){
            rCount = 0;
            lCount = 0;
            answer++;
        }
    }
    return answer
};
// @lc code=end

