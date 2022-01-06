/*
 * @lc app=leetcode.cn id=2287 lang=javascript
 *
 * [2287] 重排字符形成目标字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    let answer = Infinity;
    const targetHash = {}
    const sourceHash = {}
    for( let i = 0; i < s.length; i++ ) {
        if(sourceHash[s[i]] === undefined) {
            sourceHash[s[i]] = 1
        }else{
            sourceHash[s[i]]++
        }
    }
    for( let i = 0; i < target.length; i++){
        if(targetHash[target[i]] === undefined) {
            targetHash[target[i]] = 1
        }else{
            targetHash[target[i]]++
        }
    }
    for(let key in targetHash){
        if(sourceHash[key]){
            answer = Math.min(answer,parseInt(sourceHash[key]/targetHash[key]))
            if(!answer){
                return 0
            }
        }else{
            return 0
        }
    }
    return answer
};
// @lc code=end

