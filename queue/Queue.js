module.exports = class Queue {
  constructor() {
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    if (this.size() === 0) return;

    const item = this[this.head];

    delete this[this.head];

    this.head++;

    if (this.head === this.tail) {
      this.head = 0;
      this.tail = 0;
    }

    return item;
  }

  size() {
    return this.tail - this.head;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this[this.head];
  }
};
