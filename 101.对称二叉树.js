/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const root = {
  val: 5,
  left: {
    val: 4,
    left: null,
    right: {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null
      },
      right: null,
    },
  },
  right: {
    val: 1,
    left: null,
    right: {
      val: 4,
      left: {
        val: 2,
        left: null,
        right: null
      },
      right: null
    }
  }
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/*
* ❌
* 细节：直接中序遍历有问题
* 会被 [5,4,1,null,1,null,4,2,null,2,null] 教育
* 194/195 难受
*/
var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }
  let stack = [];
  let getArray = function (root) {
    if (root.left) {
      getArray(root.left);
    } else if (root.right !== null) {
      stack.push(null);
    }
    if (root !== null) {
      stack.push(root.val);
    } else {
      stack.push(null);
    }
    if (root.right) {
      getArray(root.right);
    } else if (root.left !== null) {
      stack.push(null);
    }
  }
  getArray(root);
  while (stack.length > 1) {
    if (stack.pop() !== stack.shift()) {
      return false;
    }
  }
  return true;
};
/*
* 方法: 递归法
* 来自: leetCode 官方解法
* 细节：递归方法接受两节点,一个左子树一个右子树，左子树和右子树同时对称遍历。
*/
var isSymmetric = function (root) {
  const isMirror = function (root_l, root_r) {
    if (root_l === null && root_r === null) {
      return true;
    }
    if (root_l === null || root_r === null) {
      return false
    }
    return (root_l.val === root_r.val && isMirror(root_l.left, root_r.right) && isMirror(root_l.right, root_r.left))
  }
  return isMirror(root, root);
}
/*
* 方法: 迭代法
* 细节: 两个两个push 两个两个取出,成对称的树进行操作
*/
var isSymmetric = function (root) {
  let stack = [];
  if (root == null) {
    return true;
  } else {
    stack.push(root.left);
    stack.push(root.right);
  }
  while (stack.length) {
    let r = stack.shift();
    let l = stack.shift();
    if (l == null && r === null) {
      continue;
    }
    if (l === null || r === null || l.val !== r.val) {
      return false
    } else {
      stack.push(l.left);
      stack.push(r.right);
      stack.push(l.right);
      stack.push(r.left);
    }
  }
  return true;
}
isSymmetric(root);
