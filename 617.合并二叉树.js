/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
	if (t1 === null) return t2;
	if (t2 === null) return t1;
	let answer = {
		val: t1.val + t2.val,
		left: null,
		right: null
	};
	let t1Stack = [ t1 ];
	let t2Stack = [ t2 ];
	let answerStack = [ answer ];
	while (t1Stack.length) {
		let t1Node = t1Stack.pop();
		let t2Node = t2Stack.pop();
		let answerNode = answerStack.pop();
		if (t1Node.left && t2Node.left) {
			answerNode.left = {
				val: t1Node.left.val + t2Node.left.val,
				left: null,
				right: null
			};
			answerStack.push(answerNode.left);
			t1Stack.push(t1Node.left);
			t2Stack.push(t2Node.left);
		} else if (!t1Node.left) {
			answerNode.left = t2Node.left;
		} else {
			answerNode.left = t1Node.left;
		}

		if (t1Node.right && t2Node.right) {
			answerNode.right = {
				val: t1Node.right.val + t2Node.right.val,
				right: null,
				right: null
			};
			answerStack.push(answerNode.right);
			t1Stack.push(t1Node.right);
			t2Stack.push(t2Node.right);
		} else if (!t1Node.right) {
			answerNode.right = t2Node.right;
		} else {
			answerNode.right = t1Node.right;
		}
	}
	return answer;
};
// @lc code=end
