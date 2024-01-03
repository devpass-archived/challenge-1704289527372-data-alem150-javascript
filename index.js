const { Stack, Queue } = require('./dataStructures');

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log('Stack:', stack);
console.log('Popped element:', stack.pop());
console.log('Stack after popping:', stack);

const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');

console.log('Queue:', queue);
console.log('Dequeued element:', queue.dequeue());
console.log('Queue after dequeuing:', queue);