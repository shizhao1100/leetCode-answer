/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
/*
* 方法：迭代法
* 细节：以栈来维护迭代状态，同时遍历root1和root2不同则退出，相同则继续。硬要说贪心也可以。毕竟下一个状态成立的前提是上一个节点必然相同。
* 空间复杂度：On
* 时间复杂度：On
*/
var leafSimilar = function (root1, root2) {
  let root1Stack = [root1];
  let root2Stack = [root2];
  let value1 = undefined;
  let value2 = undefined;
  const getLeaftNodeValue = (isRoot1) => {
    let stack = undefined;
    if (isRoot1) {
      stack = root1Stack;
    } else {
      stack = root2Stack;
    }
    while (stack.length) {
      let node = stack.pop();
      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
      if (node.left === null && node.right === null) {
        return node.val;
      }
    }
    return false;
  }

  while (root1Stack.length || root2Stack.length) {
    if (getLeaftNodeValue(true) === getLeaftNodeValue(false)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
