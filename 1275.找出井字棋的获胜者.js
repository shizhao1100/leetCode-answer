/*
 * @lc app=leetcode.cn id=1275 lang=javascript
 *
 * [1275] 找出井字棋的获胜者
 */

// @lc code=start
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  const initCheckBorad = function () {
    const checkerboard = [];
    for (let i = 0; i < 3; i++) {
      checkerboard.push([[0], [0], [0]])
    }
    return checkerboard;
  }
  const move = function (checker, position, checkerboard) {
    checkerboard[position[0]][position[1]] = checker
  }
  const checkWinner = function (checkerboard) {
    if ((checkerboard[0][0] === checkerboard[0][1] && checkerboard[0][0] === checkerboard[0][2] && checkerboard[0][0] !== 0)
      || (checkerboard[0][0] === checkerboard[1][1] && checkerboard[0][0] === checkerboard[2][2] && checkerboard[0][0] !== 0)
      || (checkerboard[0][0] === checkerboard[1][0] && checkerboard[0][0] === checkerboard[2][0] && checkerboard[0][0] !== 0)) {
      return checkerboard[0][0]
    }
    else if (checkerboard[1][0] === checkerboard[1][1] && checkerboard[1][0] === checkerboard[1][2] && checkerboard[1][0] !== 0) {
      return checkerboard[1][0]
    }
    else if ((checkerboard[2][0] === checkerboard[2][1] && checkerboard[2][0] === checkerboard[2][2] && checkerboard[2][0] !== 0)
      || (checkerboard[2][0] === checkerboard[1][1] && checkerboard[2][0] === checkerboard[0][2] && checkerboard[2][0] !== 0)) {
      return checkerboard[2][0]
    }
    else if ((checkerboard[0][1] === checkerboard[1][1] && checkerboard[0][1] === checkerboard[2][1] && checkerboard[0][1] !== 0)) {
      return checkerboard[0][1]
    }
    else if (checkerboard[0][2] === checkerboard[1][2] && checkerboard[0][2] === checkerboard[2][2] && checkerboard[0][2] !== 0) {
      return checkerboard[0][2]
    }
    return false
  }
  const checkerboard = initCheckBorad();
  for (let i = 0; i < moves.length; i++) {
    if (i % 2 == 0) {
      move("A", moves[i], checkerboard)
    } else {
      move("B", moves[i], checkerboard)
    }
    const winner = checkWinner(checkerboard)
    if (winner) return winner
  }
  if (moves.length === 9) {
    return "Draw"
  }
  return "Pending"
};
// @lc code=end

