const Queue = require("./Queue");

describe("queue", () => {
  test("should enqueue an item", () => {
    const queue = new Queue();

    queue.enqueue("John");
    queue.enqueue("Doe");

    expect(queue.size()).toEqual(2);

    queue.enqueue("Mary");
    queue.enqueue("Johene");

    expect(queue.size()).toEqual(4);
  });

  test("should dequeue an item", () => {
    const queue = new Queue();

    queue.enqueue("John");
    queue.enqueue("Doe");
    expect(queue.size()).toEqual(2);
    expect(queue.dequeue()).toEqual("John");
    expect(queue.dequeue()).toEqual("Doe");
    expect(queue.size()).toEqual(0);
  });

  test("should show the size", () => {
    const queue = new Queue();

    queue.enqueue("John");
    queue.enqueue("Doe");
    expect(queue.size()).toEqual(2);
  });

  test("should tell if is empty", () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toEqual(true);
    queue.enqueue("John");
    queue.enqueue("Doe");
    expect(queue.isEmpty()).toEqual(false);
    expect(queue.dequeue()).toEqual("John");
    expect(queue.dequeue()).toEqual("Doe");
    expect(queue.isEmpty()).toEqual(true);
  });

  test("should return the value of first object with peek", () => {
    const queue = new Queue();

    queue.enqueue("John");
    queue.enqueue("Doe");
    expect(queue.peek()).toEqual("John");

    queue.dequeue();
    expect(queue.peek()).toEqual("Doe");

    queue.dequeue();
    expect(queue.peek()).toEqual(undefined);
  });
});
