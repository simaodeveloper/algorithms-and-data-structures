module.exports = class Queue {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  enqueue(object) {
    this.list.push(object);
    this.length++;
  }

  dequeue() {
    if (this.length === 0) return;

    this.length--;
    return this.list.shift();
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this.list[0];
  }
};
