"use strict";

// let itemName = document.querySelector(".item-name");
// let list = document.querySelector("#list");
// const addButton = document.querySelector("button");
// const h3 = document.querySelector("h3");

// addButton.addEventListener("click", function () {
//   let txt = itemName.value;

//   if (txt === "") h3.textContent = "OPPS! Something Is Missing!";
//   else {
//     let li = document.createElement("li");

//     li.innerHTML = txt;
//     list.insertBefore(li, list.childNodes[1]);

//     itemName.value = "";
//   }
// });

// list.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     e.target.classList.toggle("checked");
//   }
// });

const add = document.querySelector(".add");
const button = document.querySelector(".button");
const buttonToAdd = document.querySelector(".button-to-add");
const floatingBox = document.querySelector(".floating-box");
const addButton = document.querySelector(".add");
const input = document.querySelector("input");
const myId = document.querySelector("#myId");
const hide = document.querySelector(".hide");
const item = document.querySelector(".item");

myId.addEventListener("click", function (e) {
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
    item.classList.add("none");
    myId.insertAdjacentHTML("beforeend", html);
    input.value = "";
    floatingBox.classList.toggle("hide");
  }
});

//show popup
buttonToAdd.addEventListener("click", function () {
  floatingBox.classList.toggle("hide");
});
