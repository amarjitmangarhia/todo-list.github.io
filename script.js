"use strict";

const add = document.querySelector(".add");

const buttonToAdd = document.querySelector(".button-to-add");
const floatingBox = document.querySelector(".floating-box");
const addButton = document.querySelector(".add");
const input = document.querySelector("input");
const myId = document.querySelector("#myId");
const hide = document.querySelector(".hide");
const li = document.querySelector("li");
const listOfItems = document.querySelector(".to-do-list");
const button = document.querySelector("button");

console.log(button);

myId.addEventListener("click", function (e) {
  // ADD CHECKED CLASS
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  // REMOVE THE ELEMENT

  if (e.target.tagName === "BUTTON") {
    e.target.parentNode.remove();
  }
});

// RENDER LI ON SCREEN
add.addEventListener("click", function () {
  if (input.value == "") {
    return;
  } else {
    const html = `<li>
    ${input.value}
    <button>&times;</button>
  </li>`;
    li.classList.add("none");
    myId.insertAdjacentHTML("beforeend", html);
    input.value = "";
    floatingBox.classList.toggle("hide");
  }
});

//SHOW POPUP
buttonToAdd.addEventListener("click", function () {
  floatingBox.classList.toggle("hide");
});
