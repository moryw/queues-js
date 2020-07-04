const LinkedList = require('./LinkedList');

class Queue {
  constructor() {
    this.queue = new LinkedList();
    this.size = 0;
  }

  enqueue(data) {
    this.queue.addToTail(data)
    this.size++
    console.log(`Added ${data}! Queue size is now ${this.size}`);
  }
}

module.exports = Queue;

// const restaurantOrders = new Queue();
// console.log(`restaurantOrders has ${restaurantOrders.size} nodes`)
