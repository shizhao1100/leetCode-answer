/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
	if (root === null) {
		return 0;
	}
	let stack = [ root ];
	let answer = 0;
	while (stack.length) {
		let node = stack.pop();
		if (node.left && node.left.left === null && node.left.right === null) {
			answer = answer + node.left.val;
		}
		if (node.left) {
			stack.push(node.left);
		}
		if (node.right) {
			stack.push(node.right);
		}
	}
	return answer;
};
// @lc code=end
