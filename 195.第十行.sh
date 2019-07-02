#
# @lc app=leetcode.cn id=195 lang=bash
#
# [195] 第十行
#
# Read from the file file.txt and output the tenth line to stdout.

# sed -n '10p' file.txt

cat file.txt | awk 'NR==10'

# head -10 file.txt | tail -1
