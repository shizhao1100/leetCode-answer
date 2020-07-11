/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
	let answer = 0;
	let obstaclesHash = {};
	for (let i = 0; i < obstacles.length; i++) {
		let position = `${obstacles[i][0]},${obstacles[i][1]}`;
		obstaclesHash[position] = true;
	}

	let status = {
		position: [ 0, 0 ],
		angle: 1
	};
	function run(length, angle, position, obstacles) {
		switch (angle) {
			case 2:
				for (let i = 0; i < length; i++) {
					let next = `${position[0] + 1},${position[1]}`;
					if (obstacles[next]) break;
					position[0]++;
				}
				break;
			case 1:
				for (let i = 0; i < length; i++) {
					let next = `${position[0]},${position[1] + 1}`;
					if (obstacles[next]) break;
					position[1]++;
				}
				break;
			case 4:
				for (let i = 0; i < length; i++) {
					let next = `${position[0] - 1},${position[1]}`;
					if (obstacles[next]) break;
					position[0]--;
				}
				break;
			case 3:
				for (let i = 0; i < length; i++) {
					let next = `${position[0]},${position[1] - 1}`;
					if (obstacles[next]) break;
					position[1]--;
				}
				break;
			default:
				console.log('error');
				break;
		}
	}
	function computeDistance(position) {
		return position[0] * position[0] + position[1] * position[1];
	}
	function executeCommand(command, status, obstaclesHash) {
		switch (command) {
			case -2:
				status.angle -= 1;
				if (status.angle <= 0) status.angle += 4;
				break;
			case -1:
				status.angle += 1;
				if (status.angle > 4) status.angle -= 4;
				break;
			default:
				run(parseInt(command), status.angle, status.position, obstaclesHash);
				answer = Math.max(computeDistance(status.position), answer);
				break;
		}
	}
	for (let i = 0; i < commands.length; i++) {
		executeCommand(commands[i], status, obstaclesHash);
	}
	return answer;
};
// @lc code=end
