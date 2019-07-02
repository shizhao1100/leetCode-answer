--
-- @lc app=leetcode.cn id=182 lang=mysql
--
-- [182] 查找重复的电子邮箱
--
SELECT Email from Person
Group By Email
Having Count(*) > 1;


