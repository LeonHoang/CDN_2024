class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return "Hàng đợi rỗng";
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

export function reverseStringUsingQueue(s) {
  let queue = new Queue();
  let result = "";

  // Thêm từng ký tự của chuỗi vào hàng đợi
  for (let i = 0; i < s.length; i++) {
    queue.enqueue(s[i]);
  }

  // Lấy từng ký tự từ hàng đợi và thêm vào chuỗi kết quả
  while (!queue.isEmpty()) {
    result = queue.dequeue() + result;
  }

  return result;
}
