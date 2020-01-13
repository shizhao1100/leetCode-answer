
#
# @lc app=leetcode.cn id=374 lang=python
#
# [374] 猜数字大小
#

# @lc code=start

class Solution(object):
    def guessNumber(self, n):
        left = 1
        right = n
        while left < right:
            # mid = left + (right - left) // 2
            mid = (left + right) >> 1
            if guess(mid) == 1:
                # 中位数比猜的数小，因此比中位数小的数包括中位数都不是目标元素
                left = mid + 1
            else:
                right = mid
        # 最后剩下的数一定是所求，无需后处理
        return left
# @lc code=end
