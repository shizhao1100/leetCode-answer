/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  for (let i = 0; i < this.minStack.length; i++) {
    if (this.minStack[i] > x) {
      this.minStack.splice(i, 0, x);
      return;
    }
  }
  this.minStack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const x = this.stack.pop();
  for (let i = 0; i < this.minStack.length; i++) {
    if (this.minStack[i] === x) {
      this.minStack.splice(i, 1);
      break;
    }
  }
  return x;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
