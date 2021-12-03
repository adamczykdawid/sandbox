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

const formData = {};
for (let input of [creditCardInput, termsChechbox, veggieSelect]) {
  input.addEventListener("input", ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === "checkbox" ? checked : value;
  });
}
// creditCardInput.addEventListener("input", (e) => {
//   console.log(e);
//   formData["cc"] = e.target.value;
// });
// veggieSelect.addEventListener("input", (e) => {
//   formData["veggie"] = e.target.value;
// });
// termsChechbox.addEventListener("input", (e) => {
//   formData["agreeToTerms"] = e.target.checked;
// });
