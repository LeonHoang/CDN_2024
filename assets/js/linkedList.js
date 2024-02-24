// Định nghĩa nút của danh sách liên kết
function Node(data) {
  this.data = data;
  this.next = null;
}

// Định nghĩa danh sách liên kết
function LinkedList() {
  this.head = null;
}

// Thêm một nút vào đầu danh sách liên kết
LinkedList.prototype.push = function (data) {
  const newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
};

// Chuyển đổi danh sách liên kết thành chuỗi
LinkedList.prototype.toString = function () {
  let node = this.head;
  let result = "";
  while (node) {
    result += node.data;
    node = node.next;
  }
  return result;
};

// Hàm để đảo ngược chuỗi sử dụng danh sách liên kết
export function reverseStringLinkedList(str) {
  const list = new LinkedList();
  for (let i = 0; i < str.length; i++) {
    list.push(str[i]);
  }
  return list.toString();
}
