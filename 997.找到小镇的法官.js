/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
function isJudge(graph, key, nodeCount) {

    if (Object.keys(graph[key]).length === nodeCount) {
        for (let node in graph) {
            if (graph[node][key]) {
                return false;
            } else {
                continue;
            }
        }
        return key;
    }
    return false
}
var findJudge = function (N, trust) {
    if (N === 1 && trust.length === 0) return 1;
    let graph = {};
    for (let i = 0; i < trust.length; i++) {
        if (!graph[trust[i][0]]) graph[trust[i][0]] = { id: trust[i][0] };
        if (!graph[trust[i][1]]) graph[trust[i][1]] = { id: trust[i][0] };
        graph[trust[i][1]][trust[i][0]] = graph[trust[i][0]];
    }
    let nodeCount = Object.keys(graph).length;
    for (let i = 0; i < nodeCount; i++) {
        const judgeNum = isJudge(graph, Object.keys(graph)[i], nodeCount)
        if (judgeNum !== false) return judgeNum;
        continue
    }
    return -1
};
// @lc code=end

