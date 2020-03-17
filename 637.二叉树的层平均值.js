/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let answer = [];
  if (!root) return answer;
  root.deep = 1;
  let stack = [root];
  let lastDeep = 1;

  let average = 0;
  let nodeCounInLevel = 0;

  while (stack.length) {
    let node = stack.pop();
    if (node.deep !== lastDeep) {
      lastDeep = node.deep;
      answer.push(average / nodeCounInLevel);
      average = node.val;
      nodeCounInLevel = 1;
    } else {
      average = average + node.val;
      nodeCounInLevel++;
    }
    if (node.left) {
      node.left.deep = node.deep + 1;
      stack.unshift(node.left);
    }
    if (node.right) {
      node.right.deep = node.deep + 1;
      stack.unshift(node.right);
    }
  }
  if (nodeCounInLevel) {
    answer.push(average / nodeCounInLevel);
  }
  return answer;
};
// @lc code=end

