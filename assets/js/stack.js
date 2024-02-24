// stack
class Stack {
  size;
  top;
  a = [];

  // Function to check if stack is empty
  isEmpty() {
    return this.top < 0;
  }

  constructor(n) {
    this.top = -1;
    this.size = n;
    this.a = new Array(this.size);
  }

  // Function to push element in Stack
  push(x) {
    if (this.top >= this.size) {
      document.write("Stack Overflow<br>");
      return false;
    } else {
      this.a[++this.top] = x;
      return true;
    }
  }

  // Function to pop element from stack
  pop() {
    if (this.top < 0) {
      document.write("Stack Underflow<br>");
      return 0;
    } else {
      let x = this.a[this.top--];
      return x;
    }
  }
}

// Function to reverse the string
export function reverseUsingStack(str) {
  let resultStr = [];
  // Create a stack of capacity
  // equal to length of string
  let n = str.length;
  let obj = new Stack(n);

  // Push all characters of string
  // to stack
  let i;
  for (i = 0; i < n; i++) obj.push(str[i]);

  // Pop all characters of string
  // and put them back to str
  for (i = 0; i < n; i++) {
    let ch = obj.pop();
    resultStr[i] = ch;
  }

  return resultStr.join("");
}
