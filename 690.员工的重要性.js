/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     // It's the unique id of each node
 *     // unique id of this employee
 *     this.id = id;
 *     // the importance value of this employee
 *     this.importance = importance;
 *     // the id of direct subordinates
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
	function getHashNode(ems) {
		let hashTable = {};
		for (let i = 0; i < ems.length; i++) {
			hashTable[ems[i].id] = ems[i];
		}
		return hashTable;
	}
	let answer = 0;
	let hashTable = getHashNode(employees);
	let stack = [ hashTable[id] ];
	while (stack.length) {
		let node = stack.pop();
		answer = answer + node.importance;
		for (let i = 0; i < node.subordinates.length; i++) {
			stack.push(hashTable[node.subordinates[i]]);
		}
	}
	return answer;
};
// @lc code=end
