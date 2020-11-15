/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 可以被一步捕获的棋子数
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    let position = undefined;
    captures = function (i, j, board) {
        let count = 0;
        let _i = i;
        let _j = j;
        while (_i >= 0) {
            if (board[_i][j] === 'B') {
                break;
            }
            if (board[_i][j] === 'p') {
                count++;
                break;
            }
            _i--;
        }
        _i = i;
        _j = j;
        while (_j >= 0) {
            if (board[i][_j] === 'B') {
                break;
            }
            if (board[i][_j] === 'p') {
                count++;
                break;
            }
            _j--;
        }
        _i = i;
        _j = j;
        while (_i < board.length) {
            if (board[_i][j] === 'B') {
                break;
            }
            if (board[_i][j] === 'p') {
                count++;
                break;
            }
            _i++;
        }
        _i = i;
        _j = j;
        while (_j < board[0].length) {
            if (board[i][_j] === 'B') {
                break;
            }
            if (board[i][_j] === 'p') {
                count++;
                break;
            }
            _j++;
        }
        return count;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'R') {
                position = [i, j];
                return captures(i, j, board);
            }
        }
    }
};
// @lc code=end

