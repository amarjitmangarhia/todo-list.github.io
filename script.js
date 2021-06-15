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

const buttonToAdd = document.querySelector(".button-to-add");
const floatingBox = document.querySelector(".floating-box");
const addButton = document.querySelector(".add");
const input = document.querySelector("input");
const listOfItems = document.querySelector(".list-of-items");

addButton.addEventListener("click", function () {
  if (input.value == "") {
    return;
  } else {
    const html = `<li class="item">
  <p class="item-name">${input.value}</p>
  <div class="button">✔</div>
</li>`;
    listOfItems.insertAdjacentHTML("beforeend", html);
    floatingBox.style.opacity = "0";
  }
});

//show popup
let i = true;
buttonToAdd.addEventListener("click", function () {
  if (i) {
    floatingBox.style.opacity = "1";

    i = false;
  } else {
    floatingBox.style.opacity = "0";
    i = true;
  }
});
