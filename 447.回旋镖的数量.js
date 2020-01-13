/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */

/**
 * 这个题相对来说比较奇怪 首先要做的就是读懂题。。。
 * 本质是给了一堆二维点，这堆二维点，点与点之间会有距离
 * 如果一个点到另外两个点的距离相等 即构成两个‘回旋镖’ [a-b,a-c],[a-c,a-b]
 * 如果一个点到另外三个点的距离相等 即构成6个‘回旋镖’ 
 * [a-b a-c],[a-c,a-b],[a-b a-d],[a-d,a-b],[a-d a-c],[a-c,a-d]
 * 计算公式为 n(n-1)
 * 
 * 思路:
 * 这里构建了一个二维数组 去存储所有的点与点之间的距离
 * 然后构建一个三重循环去循环判断三个点之间的距离是否一致，一致则计算‘回旋镖’数目
 * 
 */
var numberOfBoomerangs = function(points) {
	function boomerangs(n) {
		return n * (n - 1);
	}
    let distance = new Array(points.length);
    // 构建数组
	for (let i = 0; i < distance.length; i++) {
		distance[i] = new Array(points.length);
		distance[i][i] = [ NaN ];
    }
    // 计算距离
	for (let i = 0; i < points.length; i++) {
		for (let j = i + 1; j < points.length; j++) {
			let x = points[j][0] - points[i][0];
			let y = points[j][1] - points[i][1];
			let d = x * x + y * y;
			distance[i][j] = d;
			distance[j][i] = d;
		}
	}
    let answer = 0;
    
    // 计算距离相等的数量
    // 第一层循环 固定第一个点
	for (let i = 0; i < distance.length; i++) {
        // 第二层循环 固定第二个点
        // 固定了第一个点
		for (let j = 0; j < distance.length; j++) {
			let d = distance[i][j];
			let count = 0;
			if (!isNaN(d)) {
                // 第三层循环 固定第三个点
				for (let k = j + 1; k < distance.length; k++) {
                    // 判断第一个点 到第二个点之间的距离 是否与 第一个点到第三个点之间的距离一致
					if (d === distance[i][k]) {
                        count++;
                        // 一致后置空 防止 第二个点移动后重复计算
						distance[i][k] = NaN;
					}
				}
			}
			if (count !== 0) {
				answer = answer + boomerangs(count + 1);
			}
		}
	}
	return answer;
};
// @lc code=end
