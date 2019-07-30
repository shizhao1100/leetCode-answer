/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/*
* 方法：迭代法
* 细节：正向缓存节点
*/
var reverseList = function (head) {
  if (head === null || head.next === null) return head;
  let childchild = {
    val: head.val,
    next: null
  };
  let child = undefined;
  while (head.next) {
    head = head.next;
    child = {
      val: head.val,
      next: childchild
    };
    childchild = child;
  }
  return child ? child : childchild;
};
/*
* 方法：递归法
* 细节：倒序缓存节点
* nk-1->nk->nk+1
* 我们希望nk的下一个节点nk+1(nk.next)指向nk即
* nk.next.next = nk
*/
var reverseList = function (head) {
  if (head === null || head.next === null) return head;
  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p
};