/*
 * @lc app=leetcode.cn id=811 lang=javascript
 *
 * [811] 子域名访问计数
 */

// @lc code=start
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
	let answer = [];
	let hashTable = {};
	for (let i = 0; i < cpdomains.length; i++) {
		let stringArray = cpdomains[i].split(' ');
		let count = parseInt(stringArray[0]);
		let subdomain = stringArray[1].split('.');
		for (let j = 0; j < subdomain.length; j++) {
			let subdomainName = '';
			for (let k = j; k < subdomain.length; k++) {
				subdomainName = subdomainName + '.' + subdomain[k];
			}
			subdomainName = subdomainName.replace('.', '');
			if (hashTable[subdomainName]) {
				hashTable[subdomainName] += count;
			} else {
				hashTable[subdomainName] = count;
			}
		}
	}
	for (let keys in hashTable) {
		answer.push(`${hashTable[keys]} ${keys}`);
	}
	return answer;
};
// @lc code=end
