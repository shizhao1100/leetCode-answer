/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/*
* 方法：双指针法
* 细节：A链表到尾后指向B链表头， B链表到尾后指向A链表头。 头节点差被抵消。直接判断节点指针是否相同即可。
*/
var getIntersectionNode = function (headA, headB) {
  let headAToheadB = false;
  let headBToheadA = false;
  let headB_origin = headB;
  let headA_origin = headA;

  while (headA && headB) {
    if (headA === headB) {
      return headA;
    }
    if (headA.next === null && headAToheadB === false) {
      headA = headB_origin;
      headAToheadB = true;
    } else {
      headA = headA.next;
    }
    if (headB.next === null && headBToheadA === false) {
      headB = headA_origin;
      headBToheadA = true;
    } else {
      headB = headB.next;
    }
  }
  return null
};

