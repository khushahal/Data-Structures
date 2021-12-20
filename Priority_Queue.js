/*
A priority queue is a data structure that extends the queue by a priority dimension. Let’s expand both terms. The queue is a list of elements taken in the same order as they arrived. For instance, a line of people waiting to pay at the Supermarket behaves like a queue: first-in, first-served, or FIFO (first in, first out).

There can be 2 type of priority queue:-
a) Max b) Min


measure Operations :-
a) enqueue: insert elements on the queue .(O(n log n), insertion into an array is constant but sorting takes n log n)
b) dequeue: remove elements from the queue in the same order they were inserted. (Time: O(n), finding the top element)

developer:- 
We can developer priority queue using Array  but we need to sort the data in each insertion so we can create using heap.

1. Naive: Priority Queue implemented using Array + Sorting.
2. Priority Queue implemented using a Heap (A heap is a tree data structure that keeps to max or min element at the root. So you can have a max-heap or min-heap. Regardless, they have two basic operations: insert and remove)

Below example is priority queue by using array. you can make it max or min by sending comparator.

*/

class PriorityQueue {
  constructor(comparator = (a, b) => a - b) {
    this.items = [];
    this.comparator = comparator;
  }

  /**
   * Add a new data (enqueue)
   * Time complexity O(n log n)
   */
  enqueue(value) {
    this.items.push(value);
    this.items.sort(this.comparator);
  }

  /**
   * Remove the head/first element.
   * Time complexity O(1)
   */
  dequeue() {
    if (!this.items.length) return "underflow";
    return this.items.shift(); //remove element
  }

  /*
   front element
  */
  front() {
    if (!this.items.length) return "No elements in queue";
    return this.items[0];
  }

  rear() {
    if (!this.items.length) return "No elements in queue";
    return this.items[this.items.length - 1];
  }

  // helper methods of an queue

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    return this.items;
  }
}

// run the code

const pq = new PriorityQueue(); //dont send comparator so it default asc will be used.

console.log("priority queue in start : ", pq.printQueue());

pq.enqueue(10);
pq.enqueue(20);
pq.enqueue(7);
pq.enqueue(6);
pq.enqueue(5);

console.log("priority queue in start : ", pq.printQueue());

pq.dequeue();

console.log("priority front : ", pq.front());
console.log("priority rear : ", pq.rear());

console.log("priority queue in start : ", pq.printQueue());
