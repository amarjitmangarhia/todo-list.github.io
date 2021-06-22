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
const p = document.querySelector("p");
let count = 0;
let responsive = window.matchMedia("(max-width: 500px)");
let liToCheckTheLengthOfLiItems = document.getElementsByTagName("li");
const countLi = document.querySelector(".count");
const floatingEdit = document.querySelector(".floating-edit");
const inputOfEdit = document.querySelector(".input-of-edit");
const editButton = document.querySelector(".edit-button");
let isEditOpen = false;
let isFloatOpen = false;

function init() {
  floatingBox.classList.add("hide");
  for (let i = 1; i < sessionStorage.length; i++) {
    myId.insertAdjacentHTML(
      "beforeend",
      `<li><p>${sessionStorage.getItem(`${i}`)}</p> <button>&times;</button>
      <button2>edit</button2></li>`
    );
  }
  countLi.textContent = liToCheckTheLengthOfLiItems.length + 1;
}

init();

myId.addEventListener("click", function (e) {
  // ADD CHECKED CLASS
  if (e.target.tagName === "P") {
    e.target.classList.toggle("checked");
  }
  // REMOVE THE ELEMENT

  if (e.target.tagName === "BUTTON") {
    const x = e.target.closest("li");
    console.log(x);
    sessionStorage.removeItem("0");
    x.remove();
    for (let i = 0; i < liToCheckTheLengthOfLiItems.length; i++) {
      countLi.textContent = [i + 1];
    }
    if (liToCheckTheLengthOfLiItems.length < 1) {
      countLi.textContent = 0;
    }
  }

  //EDIT THE ITEM

  if (e.target.tagName === "BUTTON2") {
    floatingBox.classList.add("hide");
    floatingEdit.style.display = "block";
    isEditOpen = true;

    inputOfEdit.focus();
    editButton.addEventListener("click", function () {
      const p = e.target.closest("li");
      if (inputOfEdit.value === "") {
        floatingEdit.style.display = "none";
      } else {
        edit(p);
      }
    });
  }
});

//RENDER ELEMENTS ON CLICKING EDIT BUTTON

const edit = function (p) {
  try {
    p.innerHTML = `<p>${inputOfEdit.value}</p> <button>&times;</button>
      <button2>edit</button2>`;
    inputOfEdit.value = "";
    input.value.blur();
    floatingEdit.style.display = "none";
    isEditOpen = false;
  } catch (ex) {
    console.log("Something went wrong: " + ex);
  }
};

// RENDER LI ON SCREEN
const renderHtml = function () {
  sessionStorage.setItem(
    `${liToCheckTheLengthOfLiItems.length}`,
    `${input.value}`
  );
  const html = `<li>
  <p>
    ${input.value}</p>
    <button>&times;</button>
    <button2>edit</button2>
  
</li>`;
  // li.classList.add("hide");
  // li.style.display = "none";
  myId.insertAdjacentHTML("beforeend", html);
  input.value = "";
  hidePopup();
  countLi.textContent = liToCheckTheLengthOfLiItems.length;
  if (liToCheckTheLengthOfLiItems.length == 7) {
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

//EVENT LISTENER FOR ENTER KEY ON ADD BUTTON

input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    add.click();
    editButton.click();
  }
  if (e.keyCode === 27) {
    input.value = "";
    hidePopup();
  }
});

//SHOW POPUP
const hidePopup = function () {
  if (!floatingBox.classList.contains("hide")) {
    floatingBox.classList.add("hide");
  } else if (isEditOpen) {
    return;
  } else {
    floatingBox.classList.remove("hide");
    input.focus();
  }
};

buttonToAdd.addEventListener("click", hidePopup);

//RESPONSIVE FOR MOBILE
const res = function () {
  if (responsive.matches) {
    buttonToAdd.classList.remove("button-to-add");
    buttonToAdd.classList.add("button-to-add-mobile");

    countLi.classList.remove("count");
    countLi.classList.add("count-mobile");
  }
};
