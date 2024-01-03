const { Stack, Queue } = require('./dataStructures');

test('Stack operations', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);

  expect(stack.pop()).toBe(3);
  expect(stack.pop()).toBe(2);
});

test('Queue operations', () => {
  const queue = new Queue();
  queue.enqueue('A');
  queue.enqueue('B');
  queue.enqueue('C');

  expect(queue.dequeue()).toBe('A');
  expect(queue.dequeue()).toBe('B');
});