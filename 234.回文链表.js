/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
* 方法：双指针，反转链表
* 细节：快指针到队尾，慢指针到队中，反转前队，根据慢指针和反转的指针做对比。
* 时间复杂度：On空间复杂度O1
*/
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true;
  }
  function isEqual(p1, p2) {
    while (p1 && p2) {
      if (p1.val !== p2.val) {
        return false;
      }
      p1 = p1.next;
      p2 = p2.next;
    }
    return true
  }
  let p = head;
  let fastp = head.next;
  let prevNode = null;
  let tempNode = {
    val: p.val,
    next: prevNode
  };
  while (fastp && fastp.next) {
    prevNode = tempNode;
    p = p.next;
    tempNode = {
      val: p.val,
      next: prevNode
    };
    fastp = fastp.next.next;
  }
  if (fastp) {
    return isEqual(p.next, tempNode);
  } else {
    return isEqual(p.next, tempNode.next);
  }
};
