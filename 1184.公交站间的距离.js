/*
 * @lc app=leetcode.cn id=1184 lang=javascript
 *
 * [1184] 公交站间的距离
 */

// @lc code=start
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let sum = 0;
    let goLeft = 0;
    let p0 = Math.min(start,destination);
    let p1 = Math.max(start,destination)
    for(let i=0;i<distance.length; i++){
        sum += distance[i];
        if(i>=p0 && i<p1){
            goLeft+=distance[i]
        }
    }
    return Math.min(goLeft,sum-goLeft)
};
// @lc code=end

