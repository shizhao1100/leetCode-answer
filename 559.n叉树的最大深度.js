/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  console.log(root);
  if (!root) return 0;
  root.deep = 1;
  let stack = [root];
  maxdepth = 1;
  while (stack.length) {
    node = stack.shift();
    if (node.children && node.children.length) {
      maxdepth = Math.max(node.deep + 1, maxdepth);
      for (let i = 0; i < node.children.length; i++) {
        node.children[i].deep = node.deep + 1;
        stack.push(node.children[i]);
      }
    }
  }
  return maxdepth;
};
// @lc code=end

