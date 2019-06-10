/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
* 方法: 迭代法
* 细节：层次迭代法 记录每个节点到根路径的sum值 判断该节点是否为叶子节点与预期值是否相等
*/
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  const DepthNode = function (node, sum) {
    this.node = node;
    this.sum = sum
  }
  let stack = [];
  if (root === null) {
    return false
  }
  stack.push(new DepthNode(root, root.val));
  while (stack.length) {
    let depthNode = stack.shift();
    let nodeSum = depthNode.sum;
    let node = depthNode.node;
    if (node.left === null && node.right == null && nodeSum === sum) {
      return true;
    }
    if (node.left !== null) {
      stack.push(new DepthNode(node.left, nodeSum + node.left.val));
    }
    if (node.right !== null) {
      stack.push(new DepthNode(node.right, nodeSum + node.right.val));
    }
  }
  return false
};
/*
* 方法: 递归法
* 细节：先序递归遍历二叉树，每次开始都从sum中减去到根结点的值 判断是否为叶子节点值是否相等，条件满足则返回true，所有节点都遍历至null未发现满足条件的值则返回false
*/
var hasPathSum = function (root, sum) {
  if (root === null) {
    return false;
  }
  if (sum === root.val && root.left === null && root.right === null) {
    return true;
  }
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};
