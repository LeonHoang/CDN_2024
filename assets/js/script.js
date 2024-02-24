import { reverseUsingStack } from "./stack.js";
import { reverseString } from "./queue.js";
import { reverseStringLinkedList } from "./linkedList.js";
import { reverseStringArr } from "./array.js";

const randomString = (length) => {
  const alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZĂÂĐÊÔƠƯabcdefghijklmnopqrstuvwxyzăâđêôơư0123456789";
  let text = "";
  for (let i = 0; i < length; i++) {
    text += alphabet.charAt(Math.floor(Math.random() * alphabet.length - 1));
  }
  inputValue.innerText = text;
};

const container = document.querySelector(".container");
const formRandomLength = container.querySelector("#form-random-length");
const lengthInput = container.querySelector("#length-input");
const stackBtn = container.querySelector("#stack-btn");
const queueBtn = container.querySelector("#queue-btn");
const linkedListBtn = container.querySelector("#linked-list-btn");
const arrBtn = container.querySelector("#arr-btn");
const customFile = container.querySelector("#custom-file");
const saveBtn = document.querySelector("#save-btn");
const content = container.querySelector("#content");
const inputValue = container.querySelector("#input-value");
const inputReverse = container.querySelector("#rev-text");
const fileForm = document.querySelector("#file-form");
const time = document.querySelector("#time");

formRandomLength.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log();
  if (isNaN(lengthInput.value)) {
    Toastify({
      text: "Length of string ins't ber",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
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
  randomString(lengthInput.value);
  Toastify({
    text: "Random string is success",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
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
  if (file) {
    convertToPlainText(file).then((text) => {
      inputValue.innerText = text;
    });
  }
});

//Component hiển thị thông báo
const ToastComponent = (message) => {
  Toastify({
    text: message,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
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
    const result = reverseUsingStack(inputValue.value);
    inputReverse.value = result;
  }
  const endTime = performance.now();
  time.innerText = `Thời gian thực hiện: ${(endTime - startTime).toFixed(3)}s`;
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
    const result = reverseUsingStack(inputValue.value);
    inputReverse.value = result;
  }
  const endTime = performance.now();
  time.innerText = `Thời gian thực hiện: ${(endTime - startTime).toFixed(3)}s`;
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
    const result = reverseUsingStack(inputValue.value);
    inputReverse.value = result;
  }
  const endTime = performance.now();
  time.innerText = `Thời gian thực hiện: ${(endTime - startTime).toFixed(3)}s`;
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
    const result = reverseStringArr(inputValue.value);
    inputReverse.value = result;
  }
  const endTime = performance.now();
  time.innerText = `Thời gian thực hiện: ${(endTime - startTime).toFixed(3)}s`;
  ToastComponent(`Reverse completed with Array`);
};

// RUN
stackBtn.addEventListener("click", stackFunction);
queueBtn.addEventListener("click", queueFunction);
linkedListBtn.addEventListener("click", linkedFunction);
arrBtn.addEventListener("click", arrayFunction);

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
    destination: "https://github.com/apvarun/toastify-js",
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
