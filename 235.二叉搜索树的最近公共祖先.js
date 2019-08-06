/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
* 方法：利用二叉搜索树的特性
* 细节：如果pq出现在节点的两侧即该节点即为两节点的最近公共祖先，如果pq同时出现在节点的一侧则访问该侧子节点
* 时间复杂度：Ologn
*/
var lowestCommonAncestor = function (root, p, q) {
  let nodeStack = [root];
  let answer = root;
  const maxNodeVal = Math.max(p.val, q.val);
  const minNodeVal = Math.min(p.val, q.val)
  while (nodeStack.length) {
    let node = nodeStack.pop();
    if (maxNodeVal >= node.val && minNodeVal <= node.val) {
      answer = node;
    }
    else if (node.left && maxNodeVal <= node.val) {
      nodeStack.push(node.left);
    }
    else if (node.right && minNodeVal >= node.val) {
      nodeStack.push(node.right);
    }
  }
  return answer;
}
