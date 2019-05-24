/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
* 细节：并没有解决 头结点记录的问题，采用递归的方式每次遍历至队尾添加元素。
* 细节：并没有解决 链表指针交换问题，采用转换为数组，去重，重新创建链表的方式。
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  function addNode(val, list) {
    if (list.next === null) {
      list.next = new ListNode(val);
    } else {
      addNode(val, list.next);
    }
  }
  let list = [];
  let answer = new ListNode(0);
  while (head) {
    list.push(head.val);
    head = head.next;
  }
  list = [...new Set(list)];
  for (let i = 0; i < list.length; i++) {
    addNode(list[i], answer);
  }
  return answer.next;
};

/*
* 细节：这个head的引用，其实不会变，一直指向->那个obj tempHead也指向那个obj， 
* tempHead的指向发生改变时head的指向并不会发生改变。只有tempHead指向的值发生改变时，head的值才会发生改变。
*/

var deleteDuplicates = function (head) {
  let tempHead = head;
  while (tempHead && tempHead.next) {
    if (tempHead.val === tempHead.next.val) {
      tempHead.next = tempHead.next.next;
    } else {
      tempHead = tempHead.next
    }
  }
  return head;
}
