/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


/**
 * @way 遇障排障的典范
 * @from 
 * @description 本质上就是两个数组从头数数到一半就停计算中位数。由于各种分情况讨论就成了如下代码
 * @result 
 * @O 
 * @time 2021-07-08 15:47:48
 */
var findMedianSortedArrays = function(nums1, nums2) {
	const sumLength = nums1.length + nums2.length;
	let startPoint1 = 0;
	let startPoint2 = 0;
    let whileCount = undefined;
	let whiled = 0;
    if(sumLength %2===0){
        whileCount = sumLength/2-1
    }else{
        whileCount = parseInt(sumLength / 2);
    }
	while (whiled< whileCount) {
		if (nums1[startPoint1] > nums2[startPoint2]) {
			if (startPoint2 === null || startPoint2 + 1 > nums2.length ) {
				startPoint1++;
				startPoint2 = null;
				whiled++;
				continue;
			}
			startPoint2++;
			whiled++;
		} else {
			if (startPoint1 === null || startPoint1 + 1 > nums1.length ) {
				startPoint1 = null;
				startPoint2++;
				whiled++;
				continue;
			}
			startPoint1++;
			whiled++;
		}
	}
	if ((nums1.length + nums2.length) % 2 === 0) {
		if (startPoint1 === null || nums1[startPoint1]===undefined) {
			return (nums2[startPoint2] + nums2[startPoint2 + 1]) / 2;
		}
		if (startPoint2 === null || nums2[startPoint2]===undefined) {
			return (nums1[startPoint1] + nums1[startPoint1 + 1]) / 2;
		}
		if(nums1[startPoint1+1] && nums1[startPoint1+1]<nums2[startPoint2]){
			return (nums1[startPoint1] + nums1[startPoint1+1]) / 2;
		}
		if(nums2[startPoint2+1] && nums2[startPoint2+1]<nums1[startPoint1]){
			return (nums2[startPoint2] + nums2[startPoint2+1]) / 2;
		}
        return (nums1[startPoint1] + nums2[startPoint2]) / 2;
	} else {
		if (startPoint1 === null) {
			return nums2[startPoint2];
		}
		if (startPoint2 === null) {
			return nums1[startPoint1];
		}
		return Math.min(nums1[startPoint1]===undefined?  Infinity:nums1[startPoint1] , nums2[startPoint2]===undefined?  Infinity: nums2[startPoint2]);
	}
};
// findMedianSortedArrays([1  ], [ 2,3,4,5 ]);

// findMedianSortedArrays([1  ], [ 2,3 ]);
// findMedianSortedArrays([1,2  ], [ -1,3 ]);
// findMedianSortedArrays([  ], [ 0 ]);
// findMedianSortedArrays([  ], [ 1 ]);
// findMedianSortedArrays([  ], [ 1,2,3,4 ]);
// findMedianSortedArrays([ 1, 2 ], [ 3,4 ]);
// findMedianSortedArrays([ 1, 2 ], [ 3 ]);
// findMedianSortedArrays([ 1, 3 ], [ 2 ]);
// @lc code=end
