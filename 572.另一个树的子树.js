/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 * @way 先序遍历+KMP算法
 * @from self
 * @description 先序遍历树 将树转换为字符串 数值以#隔开 左右空姐点分别赋值 lNull, rNull。
 * 再以kmp算法比较字符串S中是否有子串T
 * @result Accepted
 * @O m+n
 * @time 2020-02-28 17:32:07
 */
var isSubtree = function(s, t) {
	if (!t) return true;
	if (!s) return false;
	function getStringTree(node, type) {
		if (!node) {
			return type + 'null';
		}
		return getStringTree(node.left, 'l') + '#' + node.val + getStringTree(node.right, 'r');
	}
	const S = getStringTree(s);
	const T = getStringTree(t);

	return S.includes(T);
};

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 * @way 双递归
 * @from self
 * @description 直接递归两颗树，比较每一个节点是否相同，不同则t树退出，更换s树节点
 * 由于是子树 
 * @result Accepted
 * @O m * n
 * @time 2020-02-28 17:32:07
 */
var isSubtree = function(s, t) {
	if (!t) return true;
	if (!s) return false;
	let Sstack = [ s ];
	let tstack = [ t ];
	while (Sstack.length) {
		let Snode = Sstack.pop();
		let Tnode = tstack.pop();
		if (Snode.val === Tnode.val) {
			let subsStack = [ Snode ];
			let subtStack = [ Tnode ];
			let flag = true;
			while (subtStack.length) {
				let subSnode = subsStack.pop();
				let subTnode = subtStack.pop();
				if (!subSnode && !subTnode) {
					continue;
				} else if (!subSnode || !subTnode) {
					flag = false;
					break;
				}
				if (subSnode.val !== subTnode.val) {
					flag = false;
					break;
				}
				subsStack.push(subSnode.left);
				subtStack.push(subTnode.left);

				subsStack.push(subSnode.right);
				subtStack.push(subTnode.right);
			}
			if (flag) {
				return true;
			} else {
				tstack = [ t ];
			}
		} else if (tstack[0] !== t) {
			tstack = [ t ];
		}
		if (Snode.left) {
			Sstack.push(Snode.left);
		}
		if (Snode.right) {
			Sstack.push(Snode.right);
		}
	}
	return false;
};
// @lc code=end
