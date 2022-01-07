/*
 * @lc app=leetcode.cn id=1351 lang=javascript
 *
 * [1351] 统计有序矩阵中的负数
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let answer = 0;
    const J = grid[0].length - 1;
    const I = grid.length - 1;
    let j = J;
    let i = 0;
    let seed = findSeed(i,j,grid)
    i = seed[0];
    j = seed[1];
    answer += J - j;
    if(j===-1){
        return (I+1) * (J+1)
    }
    while (i!==I && j!==-1){
        seed = findNextSeed(i,j,grid)
        i = seed[0];
        j = seed[1];
        if(j===-1){
            answer += (I-i)*(J-j)
            i=-1;
        }
        answer += J - j;
    }
    return answer
};
const findSeed = function(i,j,grid) {
    while(grid[i][j]<0){
        j--;
    }
    return [i,j]
}
const findNextSeed = function(i,j,grid){
    if(grid[i+1][j]>=0){
        return [i+1,j]
    }else{
        while(grid[i+1][j]<0){
            j--
            if(j===-1){
                return [i+1,j]
            }
        }
        return [i+1,j]
    }
}
// @lc code=end

