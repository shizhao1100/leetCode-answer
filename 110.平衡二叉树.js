/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
/* 
* ❌
* 方法: 迭代法
* 细节：迭代遍历二叉树，标记所有叶子节点的深度，第二趟计算最大深度差
* 计算两个子树的高度差 不是整棵树的最大高度差
*/
var isBalanced = function (root) {
  let DepthNode = function (node, depth) {
    this.node = node;
    this.depth = depth
  }
  let stack = [];
  let depthList = [];
  if (root !== null) {
    let depth = 1;
    stack.push(new DepthNode(root, 0));
    while (stack.length) {
      const node = stack.pop();
      if (node.node === null) {
        depthList.push(node.depth);
        continue;
      }
      stack.push(new DepthNode(node.node.right, node.depth + 1));
      stack.push(new DepthNode(node.node.left, node.depth + 1));
    }
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < depthList.length; i++) {
      if (min > depthList[i]) {
        min = depthList[i];
      }
      if (max < depthList[i]) {
        max = depthList[i];
      }
    }
    if ((max - min) > 1) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};

/*
* 方法: 递归法
* 细节：分别递归判断左右两个子树，每次判断遍历一次子树（这次遍历又是一次递归）
* 缺点：叶子节点经过了多次访问。
*/
var isBalanced = function (root) {
  if (root === null) {
    return true;
  }
  const getDepth = function (root) {
    if (root === null) {
      return 0;
    }
    return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
  }
  const leftDepth = getDepth(root.left);
  const rightDepth = getDepth(root.right);
  return isBalanced(root.left) && isBalanced(root.right) && (Math.abs(leftDepth - rightDepth) <= 1)
}

/*
* 方法: 递归法
* 细节：传一个变量0进去从叶子节点递归获取深度，递归判断子树是否成立。
*/
var isBalanced = function (root) {
  var calHeight = function (p, height) {
    if (p == null) {
      return height
    }
    var lr = calHeight(p.left, height + 1)
    var rr = calHeight(p.right, height + 1)
    if (lr == false || rr == false || lr - rr > 1 || rr - lr > 1) {
      return false
    }
    else {
      return Math.max(lr, rr)
    }
  }
  if (!root) return true;
  let result = calHeight(root, 0)
  return result ? true : false
}
