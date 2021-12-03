const form = document.querySelector("#signup-form");
const creditCardInput = document.querySelector("#cc");
const termsChechbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");

form.addEventListener("submit", function (e) {
  alert("submitted form!");
  console.log("cc", creditCardInput.value);
  console.log("terms", termsChechbox.checked);
  console.log("veggieSelect", veggieSelect.value);
  e.preventDefault();
});
