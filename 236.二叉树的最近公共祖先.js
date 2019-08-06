/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/*
* 方法：记录父节点
* 细节：拿到子节点的同时给子节点赋值father属性记录回溯链表。
* 空间复杂度：On
* 时间复杂度：On
*/
var lowestCommonAncestor = function (root, p, q) {
  function setNodeList(node) {
    let list = [node];
    while (node && node.father) {
      list.unshift(node.father);
      node = node.father;
    }
    return list
  }

  let nodeStack = [root];
  let nodeListP = undefined;
  let nodeListQ = undefined;

  while (nodeStack.length) {
    let node = nodeStack.pop();
    if (node.right) {
      nodeStack.push(node.right);
      node.right.father = node;
    }
    if (node.left) {
      nodeStack.push(node.left);
      node.left.father = node;
    }
    if (node.val === q.val) {
      nodeListQ = setNodeList(node);
    }
    if (node.val === p.val) {
      nodeListP = setNodeList(node);
    }
    if (nodeListP && nodeListQ) {
      break;
    }
  }
  for (let i = 0; i < Math.min(nodeListP.length, nodeListQ.length); i++) {
    if (!nodeListP[i + 1] || !nodeListQ[i + 1] || nodeListP[i + 1].val !== nodeListQ[i + 1].val) {
      return nodeListP[i];
    }
  }
  return null;
};

