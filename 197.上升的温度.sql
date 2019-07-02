--
-- @lc app=leetcode.cn id=197 lang=mysql
--
-- [197] 上升的温度
--
# Write your MySQL query statement below

select w1.Id from weather w1
inner join weather w2 on w1.Temperature > w2.Temperature and DATEDIFF(w1.RecordDate, w2.RecordDate) = 1;
