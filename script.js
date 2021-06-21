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
const liToCheckTheLengthOfLiItems = document.getElementsByTagName("li");
const countLi = document.querySelector(".count");
const floatingEdit = document.querySelector(".floating-edit");
const inputOfEdit = document.querySelector(".input-of-edit");
const editButton = document.querySelector(".edit-button");
let isEditOpen = false;

myId.addEventListener("click", function (e) {
  // ADD CHECKED CLASS
  if (e.target.tagName === "P") {
    e.target.classList.toggle("checked");
  }
  // REMOVE THE ELEMENT

  if (e.target.tagName === "BUTTON") {
    const x = e.target.closest("li");
    x.remove();
  }

  if (e.target.tagName === "BUTTON2") {
    floatingEdit.style.display = "block";
    isEditOpen = true;

    inputOfEdit.focus();
    editButton.addEventListener("click", function () {
      console.log(e.target.closest("p").textContent);
      const p = e.target.closest("li");
      if (inputOfEdit.value === "") return;
      edit(p);
    });
  }
});

//RENDER ELEMENTS ON CLICKING EDIT BUTTON

const edit = function (p) {
  try {
    p.innerHTML = `<p class = "li-p">${inputOfEdit.value} <button>&times;</button>
      <button2>edit</button2>`;
    inputOfEdit.value = "";
    floatingEdit.style.display = "none";
    isEditOpen = false;
  } catch (ex) {
    console.log("Something went wrong: " + ex);
  }
};

// RENDER LI ON SCREEN
const renderHtml = function () {
  const html = `<li>
  <p class = "li-p">
    ${input.value}
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

/*
//this piece of code updating mutiple values

  if (e.target.tagName === "BUTTON2") {
    const p = e.target.closest("p");
    floatingEdit.style.display = "block";

    editButton.addEventListener("click", function () {
      console.log(inputOfEdit.value);
      p.innerHTML = `<p>${inputOfEdit.value} <button>&times;</button>
    <button2>edit</button2></p>`;
      floatingEdit.style.display = "none";
    });
  }

*/

//this piece of code showing error of null
// if (e.target.tagName === "BUTTON2") {
//   floatingEdit.style.display = "block";

//   editButton.addEventListener("click", function () {
//     const p = e.target.closest("p");
//     let inputValue = inputOfEdit.value;
//     p.innerHTML = `${inputValue} <button>&times;</button>
//       <button2>edit</button2>`;
//     inputValue = "";
//     floatingEdit.style.display = "none";
//   });
// }
