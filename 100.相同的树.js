/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const checkTree = function (p, q) {
    if (p.val !== q.val) {
      return false;
    }
    if (p.left) {
      if (q.left) {
        let _answer = checkTree(p.left, q.left);
        if (_answer !== undefined) {
          return _answer;
        }
      } else {
        return false;
      }
    } else if (q.left !== null) {
      return false;
    }
    if (p.right) {
      if (q.right) {
        let _answer = checkTree(p.right, q.right);
        if (_answer !== undefined) {
          return _answer;
        }
      } else {
        return false;
      }
    } else if (q.right !== null) {
      return false;
    }
  }

  if (p === null && q === null) {
    return true
  }
  if (p === null && q !== null) {
    return false;
  }
  if (q === null && p !== null) {
    return false;
  }

  let answer = checkTree(p, q);

  if (answer !== undefined) {
    return answer;
  } else {
    return true;
  }
};
