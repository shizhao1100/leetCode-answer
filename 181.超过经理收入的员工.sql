--
-- @lc app=leetcode.cn id=181 lang=mysql
--
-- [181] 超过经理收入的员工
--
select
  E1.Name as Employee
from
  Employee as E1 left join Employee as E2 on E1.ManagerId = E2.Id
where
    E1.Salary > E2.Salary

