/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */

/*
* 方法：标记法
* 细节：已读过的节点标记read
*/
var hasCycle = function (head) {
  if (head === null) {
    return false
  }
  while (head.next) {
    if (head.read === undefined) {
      head.read = true;
      head = head.next;
    } else {
      return true;
    }
  }
  return false;
};
/*
* 方法：快慢指针
* 细节：快指针一次+2 慢指针一次+1 快指针追上慢指针则含有环。 快指针到队尾则没环
*/
var hasCycle = function (head) {
  if (head === null || head.next == null) {
    return false
  }
  let fast_p = head.next.next;
  let slow_p = head.next;
  while (slow_p && fast_p && fast_p.next) {
    if (fast_p === slow_p) {
      return true
    }
    slow_p = slow_p.next;
    fast_p = fast_p.next.next;
  }
  return false;
};
