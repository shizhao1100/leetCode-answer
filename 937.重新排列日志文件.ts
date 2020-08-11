/*
 * @lc app=leetcode.cn id=937 lang=typescript
 *
 * [937] 重新排列日志文件
 */

// @lc code=start
function reorderLogFiles(logs: string[]): string[] {
	const NUM_LOG = 0;
	const CHARS_LOG = 1;

	function checkStrings(strings: string[]): number {
		if ('0' <= strings[0][0] && strings[0][0] <= '9') {
			return NUM_LOG;
		} else {
			return CHARS_LOG;
		}
	}
	function comp(a: string, b: string): number {
		const aArray = a.split(' ');
		const bArray = b.split(' ');
		const af = aArray.shift() as string;
		const bf = bArray.shift() as string;
		bArray.unshift();
		if (checkStrings(aArray) === 0 && checkStrings(bArray) === 0) return 0;
		else if (checkStrings(aArray) === 0 && checkStrings(bArray) !== 0) return 1;
		else if (checkStrings(aArray) !== 0 && checkStrings(bArray) === 0) return -1;
		else {
			aArray.push(af);
			bArray.push(bf);

			const a_reserved = aArray.join(' ');
			const b_reserved = bArray.join(' ');
			if (a_reserved > b_reserved) return 1;
			else if (a_reserved < b_reserved) return -1;
			else return 0;
		}
	}
	return logs.sort(comp);
}
// @lc code=end
