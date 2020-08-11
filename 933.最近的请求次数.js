/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function() {
	this.data = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
	this.data.push(t);
	let stamp = t - 3000;
	if (stamp < 0) {
		return this.data.length;
	} else {
		let start = 0;
		let end = this.data.length - 1;
		let middle = parseInt((start + end) / 2);
		while (end > start) {
			if (this.data[middle] >= stamp) {
                end = middle;
                middle =  parseInt((start + end) / 2)
			} else {
                start = middle+1;
                middle =  parseInt((start + end) / 2)
			}
        }
        return this.data.length - end;
	}
};
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end
