"use strict";

const add = document.querySelector(".add");
const title = document.querySelector(".title");

const buttonToAdd = document.querySelector(".button-to-add");
const floatingBox = document.querySelector(".floating-box");
const addButton = document.querySelector(".add");
const input = document.querySelector("input");
const myId = document.querySelector("#myId");
const hide = document.querySelector(".hide");
const li = document.querySelector("li");
const listOfItems = document.querySelector(".to-do-list");
const button = document.querySelector("button");
const button2 = document.querySelector("button2");
let count = 0;
let responsive = window.matchMedia("(max-width: 500px)");

myId.addEventListener("click", function (e) {
  // ADD CHECKED CLASS
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  // REMOVE THE ELEMENT

  if (e.target.tagName === "BUTTON") {
    e.target.parentNode.remove();
  }

  if (e.target.tagName === "BUTTON2") {
    alert("This feature will be added soon!");
  }
});

// RENDER LI ON SCREEN
const renderHtml = function (value) {
  const html = `<li>
    ${input.value}
    <button>&times;</button>
  </li>`;
  li.classList.add("none");
  myId.insertAdjacentHTML("beforeend", html);
  input.value = "";
  floatingBox.classList.toggle("hide");
  count++;
  console.log(count);
  if (count >= 7) {
    res();
  }
};

//EVENT LISTENER FOR ADD BUTTON
add.addEventListener("click", function () {
  const inputValue = input.value;
  if (inputValue == "") {
    title.textContent = "Field is Empty";
  } else {
    renderHtml(inputValue);
  }
});

//SHOW POPUP
buttonToAdd.addEventListener("click", function () {
  floatingBox.classList.toggle("hide");
});

const res = function () {
  if (responsive.matches) {
    buttonToAdd.classList.remove("button-to-add");
    buttonToAdd.classList.add("button-to-add-mobile");
  }
};
