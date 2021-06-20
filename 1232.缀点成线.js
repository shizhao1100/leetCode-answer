/*
 * @lc app=leetcode.cn id=1232 lang=javascript
 *
 * [1232] 缀点成线
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {

    if(coordinates.length<=2){
        return true;
    }else{
        let dx = coordinates[1][0] - coordinates[0][0];
        let dy = coordinates[1][1] - coordinates[0][1];
        if(dy){
            for(let i=2;i<coordinates.length;i++){
                let dx_i = coordinates[i][0] - coordinates[0][0]
                let dy_i = coordinates[i][1] - coordinates[0][1]
                if(dx_i/dy_i === dx/dy){
                    continue
                }else{
                    return false;
                }
            }
            return true;
        }else{
            for(let i=2;i<coordinates.length;i++){
                let dx_i = coordinates[i][0] - coordinates[0][0]
                let dy_i = coordinates[i][1] - coordinates[0][1]
                if(dy_i!==0){
                    return false;
                }else{
                    continue
                }
            }
            return true;
        }
    }

};
// @lc code=end

