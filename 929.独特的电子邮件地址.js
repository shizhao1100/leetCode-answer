/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
	let hash = {};
	for (let i = 0; i < emails.length; i++) {
		let email = emails[i];
		let alice = email.split('@')[0];
		let area = email.split('@')[1];

		alice = alice.split('+')[0];
		alice = alice.replace(/\./g, '');
		email = alice + '@' + area;
		hash[email] = true;
	}
	return Object.keys(hash).length;
};
// @lc code=end
