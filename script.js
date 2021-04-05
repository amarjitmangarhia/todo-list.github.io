"use strict";

let itemName = document.querySelector(".item-name");
let list = document.querySelector("#list");
const addButton = document.querySelector("button");
const h3 = document.querySelector("h3");

addButton.addEventListener("click", function () {
  let txt = itemName.value;

  if (txt === "") h3.textContent = "OPPS! Something Is Missing!";
  else {
    let li = document.createElement("li");

    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[1]);

    itemName.value = "";
  }
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});
