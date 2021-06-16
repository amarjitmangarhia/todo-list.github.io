"use strict";

const add = document.querySelector(".add");
const button = document.querySelector(".button");
const buttonToAdd = document.querySelector(".button-to-add");
const floatingBox = document.querySelector(".floating-box");
const addButton = document.querySelector(".add");
const input = document.querySelector("input");
const myId = document.querySelector("#myId");
const hide = document.querySelector(".hide");

myId.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

add.addEventListener("click", function () {
  if (input.value == "") {
    return;
  } else {
    const html = `<div class="item">
    <li>${input.value}</li>
    <div class="button">✔</div>
  </div>`;
    myId.insertAdjacentHTML("beforeend", html);
    input.value = "";
    floatingBox.classList.toggle("hide");
  }
});

//show popup
buttonToAdd.addEventListener("click", function () {
  floatingBox.classList.toggle("hide");
});
