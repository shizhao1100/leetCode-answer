/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    if(arr.length<2){
        return []
    }
    arr.sort((a,b)=>{
        if(a-b>0){
            return 1;
        }else{
            return -1;
        }
    })
    let minDelta = Infinity; 
    for(let i=1;i<arr.length;i++) {
        const delta = arr[i] - arr[i-1];
        if(minDelta>delta){
            minDelta= delta
        }
    }
    let answerList = [];
    for(let i=1;i<arr.length;i++) {
        const delta = arr[i] - arr[i-1];
        if(minDelta === delta){
            answerList.push([arr[i-1],arr[i]])
        }
    }
    return answerList
};
// @lc code=end
