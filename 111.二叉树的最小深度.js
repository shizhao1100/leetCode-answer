/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {TreeNode} root
 * @return {number}
 */

/*
* 方法: 递归法
* 细节：若为空树返回为0；若左子树为空，则返回右子树的最小深度+1(要加上根这一层)；若右子树为空，则返回左子树的最小深度+1；若左右子树都不为空，则取左、右最小深度的较小值+1
*/
var minDepth = function (root) {
  if (root === null) {
    return 0;
  }
  else if (root.left === null) {
    return minDepth(root.right) + 1;
  }
  else if (root.right === null) {
    return minDepth(root.left) + 1;
  } else if (root.left !== null && root.right !== null) {
    return Math.min(minDepth(root.right) + 1, minDepth(root.left) + 1);
  }
};
/*
* 方法: 迭代法
* 细节：层次遍历这颗树找到左右节点都为空的节点 返回深度+1
*/
var minDepth = function (root) {
  let stack = [];
  const DepthNode = function (node, depth) {
    this.node = node;
    this.depth = depth
  }
  if (root === null) {
    return 0;
  }
  stack.push(new DepthNode(root, 0));
  while (stack.length) {
    let depthNode = stack.shift();
    let depth = depthNode.depth;
    let node = depthNode.node;
    if (node.left === null && node.right === null) {
      return depth + 1;
    } else {
      if (node.left !== null) {
        stack.push(new DepthNode(node.left, depth + 1));
      }
      if (node.right !== null) {
        stack.push(new DepthNode(node.right, depth + 1));
      }
    }
  }
}
