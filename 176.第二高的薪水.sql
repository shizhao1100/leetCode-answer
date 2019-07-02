/*
 * @lc app=leetcode.cn id=176 lang=mysql
 *
 * [176] 第二高的薪水
 */

select IFNULL (
	(select Salary 
	from Employee
	group by Salary
	order by Salary DESC
	limit 1,1),null
) as SecondHighestSalary