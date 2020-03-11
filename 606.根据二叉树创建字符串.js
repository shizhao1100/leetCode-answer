/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
	let answer = '';
	if (!t) return answer;
	function eachBefore(node) {
		answer = answer + node.val;
		if (node.left) {
			answer = answer + '(';
			eachBefore(node.left);
			answer = answer + ')';
		}
		if (node.right) {
			if (!node.left) {
				answer = answer + '()';
			}
			answer = answer + '(';
			eachBefore(node.right);
			answer = answer + ')';
		}
	}
	eachBefore(t);
	return answer;
};
// @lc code=end
