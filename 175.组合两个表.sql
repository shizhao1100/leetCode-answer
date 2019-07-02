/*
 * @lc app=leetcode.cn id=175 lang=mysql
 *
 * [175] 组合两个表
 */
select p.FirstName, p.LastName, a.City, a.State
from Person p
  left join Address a on a.PersonId =p.PersonId
