/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 * @way 后续遍历
 * @from self
 * @description 本质上是一个二叉搜索树，本身自带顺序，题目要求加上所有比自身大的值
 * 即后续遍历即可完成 
 * @result Accepted
 * @O n
 * @time 2020-02-10 01:38:00
 */
var convertBST = function(root) {
	if (root == null) return root;
	let sum = 0;
	function _convertBST(node) {
		if (node.right) {
			_convertBST(node.right);
		}
        node.val = node.val + sum;
        sum = node.val;
		if (node.left) {
			_convertBST(node.left);
		}
	}
	_convertBST(root);
	return root;
};
// @lc code=end
