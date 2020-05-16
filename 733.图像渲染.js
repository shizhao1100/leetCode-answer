/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
/**
 * @way Flood Fill 简化版(忽略了传播方向)
 * @from https://leetcode-cn.com/problems/flood-fill/solution/tu-xiang-xuan-ran-by-leetcode/
 * @description 就是画图油桶功能的简化版，所有的同值连通域渲染成新的颜色
 * @result Accepted
 * @O n
 * @time 2020-05-19 10:37:11
 */
var floodFill = function(image, sr, sc, newColor) {
	let targetColor = image[sr][sc];
	if (targetColor === newColor) return image;
	image[sr][sc] = newColor;
	let pathList = [ [ sr, sc ] ];
	while (pathList.length) {
		let p = pathList.pop();
		if (image[p[0]] !== undefined) {
			if (image[p[0]][p[1] + 1] === targetColor) {
				image[p[0]][p[1] + 1] = newColor;
				pathList.push([ p[0], p[1] + 1 ]);
			}
			if (image[p[0]][p[1] - 1] === targetColor) {
				image[p[0]][p[1] - 1] = newColor;
				pathList.push([ p[0], p[1] - 1 ]);
			}
		}
		if (image[p[0] - 1] !== undefined) {
			if (image[p[0] - 1][p[1]] === targetColor) {
				image[p[0] - 1][p[1]] = newColor;
				pathList.push([ p[0] - 1, p[1] ]);
			}
		}
		if (image[p[0] + 1] !== undefined) {
			if (image[p[0] + 1][p[1]] === targetColor) {
				image[p[0] + 1][p[1]] = newColor;
				pathList.push([ p[0] + 1, p[1] ]);
			}
		}
	}
	return image;
};
// @lc code=end
