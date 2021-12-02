const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
];

function changeColor(box) {
  const h1 = document.querySelector("h1");
  // document.body.style.backgroundColor = this.style.backgroundColor;
  h1.style.color = this.style.backgroundColor;
}

const container = document.querySelector("#boxes");
for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);
  box.addEventListener("click", changeColor);
}

////////////////////event object
document.body.addEventListener("keypress", function (e) {
  console.log(e);
});
