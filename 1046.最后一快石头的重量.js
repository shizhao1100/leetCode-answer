/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一快石头的重量
 */

const swapData = function (array, index_a, index_b) {
  let temp = array[index_a];
  array[index_a] = array[index_b];
  array[index_b] = temp;
}
const isNumber = function (obj) {
  return typeof obj === 'number' && !isNaN(obj)
}
function Heap(heapArray) {
  this.data = [];
  this.build(heapArray);
}
Heap.prototype.insetValue = function (value) {
  if (isNumber(value)) {
    this.data.push(value);
    this.shiftUp(this.data.length - 1);
  }
}
Heap.prototype.size = function () {
  return this.data.length;
}
Heap.prototype.isEmpty = function () {
  if (this.data.length === 0) {
    return true
  }
  return false;
}
Heap.prototype.getTop = function () {
  return this.data[0] === undefined ? null : this.data[0];
}
Heap.prototype.removeTop = function () {
  let value = undefined;
  if (this.data.length > 1) {
    let value = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.pop();
    this.shiftDown(0);
    return value;
  } else if (this.data.length === 1) {
    return this.data.pop();
  } else {
    return null;
  }
}
Heap.prototype.removeAtIndex = function (index) {
  let value = this.data[index];
  this.data[index] = this.data[this.data.length - 1];
  this.data.pop();
  if (this.data[index] > this.data[Math.floor((index - 1) / 2)]) {
    this.shiftUp(index);
  } else if (this.data[index] < this.data[index * 2 + 1]
    || this.data[index] < this.data[index * 2 + 2]) {
    this.shiftDown(index);
  }
  return value;
}
Heap.prototype.shiftUp = function (index) {
  let fatherIndex = Math.floor((index - 1) / 2);
  while (index >= 0) {
    if (this.data[fatherIndex] < this.data[index]) {
      swapData(this.data, fatherIndex, index);
      index = fatherIndex;
      fatherIndex = Math.floor((index - 1) / 2);
    }
    else {
      break;
    }
  }
}
Heap.prototype.shiftDown = function (index) {
  const len = this.data.length;
  let fatherIndex_1 = index * 2 + 1;
  let fatherIndex_2 = index * 2 + 2;

  while (fatherIndex_1 < len || fatherIndex_2 < len) {
    let swapFather = undefined;

    if (this.data[fatherIndex_2] === undefined
      || this.data[fatherIndex_1] > this.data[fatherIndex_2]) {
      swapFather = fatherIndex_1;
    } else {
      swapFather = fatherIndex_2;
    }
    if (this.data[index] < this.data[swapFather]) {
      swapData(this.data, swapFather, index);
      index = swapFather;
      fatherIndex_1 = index * 2 + 1;
      fatherIndex_2 = index * 2 + 2;
    } else {
      break;
    }
  }
}
Heap.prototype.build = function (heapArray) {
  for (let i = 0; i < heapArray.length; i++) {
    this.insetValue(heapArray[i])
  }
}
Heap.isHeap = function (heapArray) {
  const len = heapArray.length;
  for (let i = 0; (2 * i + 2) < len; i++) {
    if (heapArray[i] < heapArray[2 * i + 1] || heapArray[i] < heapArray[2 * i + 2]) {
      return false
    }
  }
  return true;
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let stoneHeap = new Heap(stones);
  while (true) {
    let stoneFirst = stoneHeap.removeTop();
    if (stoneHeap.isEmpty()) {
      return stoneFirst;
      break;
    }
    let stoneSecond = stoneHeap.removeTop();
    let smallStone = stoneFirst - stoneSecond;
    if (smallStone !== 0) {
      stoneHeap.insetValue(smallStone);
    }
  }
};
