/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */

/**
 * @way 正常解法
 * @from 
 * @description 创建二维数组，计算，查值
 * @result 
 * @O 
 * @time 2021-09-24 23:57:39
 */
var oddCells = function (m, n, indices) {
  const matrix = []
  let answer = 0;
  for (let i = 0; i < m; i++) {
    matrix.push([])
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0
    }
  }
  for (let i = 0; i < indices.length; i++) {
    for (let j = 0; j < n; j++) {
      matrix[indices[i][0]][j]++;
    }
    for (let j = 0; j < m; j++) {
      matrix[j][indices[i][1]]++;
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] % 2 !== 0) {
        answer++
      }
    }
  }
  return answer
};

/**
 * @way 哈希解法
 * @from 
 * @description 不再用二维数组维护稀疏矩阵，采用hash缓存矩阵
 * @result 
 * @O 
 * @time 2021-09-25 00:15:32
 */
var oddCells = function (m, n, indices) {
  const matrixHash = {}
  let answer = 0;

  for (let i = 0; i < indices.length; i++) {
    for (let j = 0; j < n; j++) {
      if (matrixHash[`${indices[i][0]}-${j}`]) {
        matrixHash[`${indices[i][0]}-${j}`]++;
      } else {
        matrixHash[`${indices[i][0]}-${j}`] = 1
      }
    }
    for (let j = 0; j < m; j++) {
      if (matrixHash[`${j}-${indices[i][1]}`]) {
        matrixHash[`${j}-${indices[i][1]}`]++;
      } else {
        matrixHash[`${j}-${indices[i][1]}`] = 1
      }
    }
  }
  const keys = Object.keys(matrixHash);
  for (let i = 0; i < keys.length; i++) {
    if (matrixHash[keys[i]] % 2 !== 0) {
      answer++
    }
  }

  return answer
};
// @lc code=end

