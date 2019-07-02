--
-- @lc app=leetcode.cn id=196 lang=mysql
--
-- [196] 删除重复的电子邮箱
--
# Write your MySQL query statement below

DELETE p1
FROM Person p1, Person p2  
WHERE p1.Email = p2.Email AND p1.Id > p2.Id
