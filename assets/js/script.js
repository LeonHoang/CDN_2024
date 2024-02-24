import { reverseStringUsingStack } from "./stack.js";
import { reverseStringUsingQueue } from "./queue.js";
import { reverseStringUsingLinkedList } from "./linkedList.js";
import { reverseStringUsingArray } from "./array.js";

const randomString = (length) => {
  const alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZĂÂĐÊÔƠƯabcdefghijklmnopqrstuvwxyzăâđêôơư0123456789";
  let text = "";
  for (let i = 0; i < length; i++) {
    text += alphabet.charAt(Math.floor(Math.random() * alphabet.length - 1));
  }
  
  return text;
};

const container = document.querySelector(".container");
const time = container.querySelector("#time");

// button
const stackBtn = container.querySelector("#stack-btn");
const queueBtn = container.querySelector("#queue-btn");
const linkedListBtn = container.querySelector("#linked-list-btn");
const arrBtn = container.querySelector("#arr-btn");
const saveBtn = container.querySelector("#save-btn");
const compareBtn = container.querySelector("#compare-btn");

// io
const inputValue = container.querySelector("#input-value");
const inputReverse = container.querySelector("#rev-text");
const formRandomLength = container.querySelector("#form-random-length");
const lengthInput = container.querySelector("#length-input");
const customFile = container.querySelector("#custom-file");

formRandomLength.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log();
  if (isNaN(lengthInput.value) ) {
    Toastify({
      text: "input is not a number",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "rgb(7, 205, 7)",
      },
    }).showToast();
    inputValue.innerText = "";
    return;
  }
  var inputText = randomString(lengthInput.value);
  inputValue.innerText = inputText;
  Toastify({
    text: "Random string is success",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "rgb(7, 205, 7)",
    },
  }).showToast();
});

customFile.addEventListener("input", (e) => {
  const file = customFile.files[0];
  if (!file) {
    return;
  }

  console.log(file)
  var ext_file = file.name.split('.').pop()
  console.log(ext_file)
  if(['doc', 'docx'].includes(ext_file)){
    convertToPlainText(file).then((text) => {
      inputValue.innerText = text;
    });
  }else if(ext_file == 'txt'){
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      inputValue.innerText = event.target.result;;
    });
    reader.readAsText(file);
  }else {
    Toastify({
      text: "accept .doc, .docx, .txt only",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "rgb(7, 205, 7)",
      },
    }).showToast();
  }
});

//Component hiển thị thông báo
const ToastComponent = (message) => {
  Toastify({
    text: message,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "rgb(7, 205, 7)",
    },
  }).showToast();
};

//Hàm chạy Stack
const stackFunction = () => {
  if (inputValue.value.trim() === "") {
    ToastComponent(`Vui lòng nhập giá trị!`);
    return;
  }
  const startTime = performance.now();
  for (let i = 0; i < 10; i++) {
    const result = reverseStringUsingStack(inputValue.value);
    inputReverse.value = result;
  }
  const endTime = performance.now();
  time.innerText = `Thời gian thực hiện: ${(endTime - startTime).toFixed(3)} milliseconds`;
  ToastComponent(`Reverse completed with Stack`);
};

//Hàm chạy Queue
const queueFunction = () => {
  if (inputValue.value.trim() === "") {
    ToastComponent(`Vui lòng nhập giá trị!`);
    return;
  }
  const startTime = performance.now();
  for (let i = 0; i < 10; i++) {
    const result = reverseStringUsingQueue(inputValue.value);
    inputReverse.value = result;
  }
  const endTime = performance.now();
  time.innerText = `Thời gian thực hiện: ${(endTime - startTime).toFixed(3)} milliseconds`;
  ToastComponent(`Reverse completed with Queue`);
};

//Hàm chạy Linked
const linkedFunction = () => {
  if (inputValue.value.trim() === "") {
    ToastComponent(`Vui lòng nhập giá trị!`);
    return;
  }
  const startTime = performance.now();
  for (let i = 0; i < 10; i++) {
    const result = reverseStringUsingLinkedList(inputValue.value);
    inputReverse.value = result;
  }
  const endTime = performance.now();
  time.innerText = `Thời gian thực hiện: ${(endTime - startTime).toFixed(3)} milliseconds`;
  ToastComponent(`Reverse completed with Linked`);
};

//Hàm chạy array
const arrayFunction = () => {
  if (inputValue.value.trim() === "") {
    ToastComponent(`Vui lòng nhập giá trị!`);
    return;
  }
  const startTime = performance.now();
  for (let i = 0; i < 10; i++) {
    const result = reverseStringUsingArray(inputValue.value);
    inputReverse.value = result;
  }
  const endTime = performance.now();
  time.innerText = `Thời gian thực hiện: ${(endTime - startTime).toFixed(3)} milliseconds`;
  ToastComponent(`Reverse completed with Array`);
};

//Hàm compare
const compareFunction = () => {
  // init
  let inputArr = [];
  let excuteTime = [];
  let algNum = 0;
  let loopNum = 100;
  let min = 10000;
  let max = 100000;
  for (let index = 0; index < loopNum; index++) {
    let input = randomString(Math.floor(Math.random() * (max - min) ) + min);
    inputArr[index] = input
  }
  // Queue
  let sum = 0;
  for (let index = 0; index < loopNum; index++) {
    const startTime = performance.now();
    reverseStringUsingQueue(inputArr[index]);
    const endTime = performance.now();
    sum = (endTime - startTime).toFixed(3)
  }
  excuteTime[algNum] = sum / loopNum;
  algNum++;

  // stack
  sum = 0;
  for (let index = 0; index < loopNum; index++) {
    const startTime = performance.now();
    reverseStringUsingStack(inputArr[index]);
    const endTime = performance.now();
    sum = (endTime - startTime).toFixed(3)
  }
  excuteTime[algNum] = sum / loopNum;
  algNum++;

  // Linked
  sum = 0;
  for (let index = 0; index < loopNum; index++) {
    const startTime = performance.now();
    reverseStringUsingLinkedList(inputArr[index]);
    const endTime = performance.now();
    sum = (endTime - startTime).toFixed(3)
  }
  excuteTime[algNum] = sum / loopNum;
  algNum++;

  // array
  sum = 0;
  for (let index = 0; index < loopNum; index++) {
    const startTime = performance.now();
    reverseStringUsingArray(inputArr[index]);
    const endTime = performance.now();
    sum = (endTime - startTime).toFixed(3)
  }
  excuteTime[algNum] = sum / loopNum;

  alert(`Thời gian thực hiện: \nQueue: ${excuteTime[0]} milliseconds\nStack: ${excuteTime[1]} milliseconds\nLinked: ${excuteTime[2]} milliseconds\nArray: ${excuteTime[3]} milliseconds`);

};

// addEventListener
stackBtn.addEventListener("click", stackFunction);
queueBtn.addEventListener("click", queueFunction);
linkedListBtn.addEventListener("click", linkedFunction);
arrBtn.addEventListener("click", arrayFunction);
compareBtn.addEventListener("click", compareFunction);

//export file
saveBtn.addEventListener("click", () => {
  let count = 0;
  const text = inputReverse.value;
  if (text.trim() === "") return;
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `output${count}.txt`;
  link.click();
  URL.revokeObjectURL(url);
  Toastify({
    text: "Save success",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "rgb(7, 205, 7)",
    },
  }).showToast();
  count++;
});

// import file
function convertToPlainText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const arrayBuffer = event.target.result;
      mammoth
        .extractRawText({ arrayBuffer: arrayBuffer })
        .then((result) => resolve(result.value))
        .catch(reject);
    };
    reader.readAsArrayBuffer(file);
  });
}
