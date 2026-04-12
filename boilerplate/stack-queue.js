// 스택 알고리즘 구현
const stack = {
  items: [],
  // 요소 추가
  push(value) {
    this.data.push(value);
  },
  // 마지막 요소 제거 및 반환
  pop() {
    return this.data.pop();
  },
  // 마지막 요소 확인
  peek() {
    return this.data[this.data.length - 1];
  },
  // 스택이 비었는지 확인
  isEmpty() {
    return this.items.length === 0;
  },
};

// 큐 알고리즘 구현
const queue = {
  items: [],
  head: 0,
  tail: 0,
  // 요소 추가
  enqueue(value) {
    this.items[this.tail] = value;
    this.tail++;
  },
  // 첫 번째 요소 제거 및 반환
  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  },
  // 큐가 비었는지 확인
  isEmpty() {
    return this.tail - this.head === 0;
  },
};
