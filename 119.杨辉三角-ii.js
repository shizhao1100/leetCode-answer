/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
/*
* 杨辉三角形第n层（顶层称第0层，第1行，第n层即第n+1行，此处n为包含0在内的自然数）正好对应于二项式\left(a+b\right)^{n}展开的系数。例如第二层1 2 1是幂指数为2的二项式\left(a+b\right)^{2}展开形式a^{2}+2ab+b^{2}的系数。
* 杨辉三角主要有下列五条性质：

* 杨辉三角以正整数构成，数字左右对称，每行由1开始逐渐变大，然后变小，回到1。
* 第n行的数字个数为n个。
* 第n行的第k个数字为组合数C_{n-1}^{k-1}。
* 第n行数字和为2^{n-1}。
* 除每行最左侧与最右侧的数字以外，每个数字等于它的左上方与右上方两个数字之和（也就是说，第n行第k个数字等于第n-1行的第k-1个数字与第k个数字的和）。这是因为有组合恒等式：C_{n}^{i}=C_{n-1}^{i-1}+C_{n-1}^{i}。可用此性质写出整个杨辉三角形。
*/
/*
* C_{n}^{k} = n!/(k!)*(n-k)!
*/
var getRow = function (rowIndex) {
  let answer = [];
  answer[0] = answer[rowIndex] = 1;
  //TODO 这里还可以优化 不用阶乘函数来减小计算
  const n1 = function (n) {
    let answer = 1;
    for (let i = 1; i <= n; i++) {
      answer = answer * i;
    }
    return answer;
  }
  for (let i = 1; i <= (rowIndex / 2); i++) {
    let answer_k_1 = 1;
    let answer_rowIndex_K_1 = 1;
    answer[i] = answer[rowIndex - i] = n1(rowIndex) / (n1(rowIndex - i) * n1(i));
  }
  return answer;
};

