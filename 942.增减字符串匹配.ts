/*
 * @lc app=leetcode.cn id=942 lang=typescript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
function diStringMatch(S: string): number[] {
	let answer = [] as number[];
	let start = 0;
	let end = S.length;
	for (let i = 0; i < S.length; i++) {
		if (S[i] === 'D') {
			answer.push(end);
			end--;
		} else {
			answer.push(start);
			start++;
		}
    }
    answer.push(end);
	return answer;
}



diStringMatch("DDI")
// @lc code=end
