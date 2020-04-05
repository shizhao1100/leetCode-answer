/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
 * @return {number}
 */

/**
 * @way 选择性遍历二叉树
 * @from self
 * @description 如果当前节点大于第二小的节点 即 子节点都大于第二小的值 不再关心该分支 剪枝
 * @result Accepted
 * @O 最坏情况为n
 * @time 2020-04-06 01:41:02
 */
var findSecondMinimumValue = function(root) {
	let stack = [ root ];
	let firstVal = Infinity;
	let secondVal = Infinity;
	while (stack.length) {
		let node = stack.pop();
		// 剪枝
		if (node.left && node.left.val < secondVal) {
			stack.push(node.left);
		}
		// 剪枝
		if (node.right && node.right.val < secondVal) {
			stack.push(node.right);
		}

		if (node.val < firstVal) {
			secondVal = firstVal;
			firstVal = node.val;
		} else if (node.val < secondVal && node.val !== firstVal) {
			secondVal = node.val;
		}
	}
	return isFinite(secondVal) ? secondVal : -1;
};
// @lc code=end
