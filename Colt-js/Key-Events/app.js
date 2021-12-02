// const input = document.querySelector("#username");

// input.addEventListener("keydown", function (e) {
//   console.log("KEYDOWN!");
// });

// input.addEventListener("keyup", function (e) {
//   console.log("KEYUP!");
// });

// input.addEventListener("keypress", function (e) {
//   console.log("KEYPRESS!");
// });

// const addItemInput = document.querySelector("#addItem");
// const itemsUl = document.querySelector("#items");

// addItemInput.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     if (!this.value) return;
//     //add a new item to list
//     const newItemText = this.value;
//     const newItem = document.createElement("li");
//     newItem.innerText = newItemText;
//     itemsUl.appendChild(newItem);
//     this.value = "";
//   }
// });
const ulParent = document.querySelector("#addItem");
const items = document.querySelector("#items");

ulParent.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!this.value) return;
    const newItemText = this.value;
    const newItem = document.createElement("li");
    newItem.innerText = newItemText;
    items.appendChild(newItem);
  }
});
