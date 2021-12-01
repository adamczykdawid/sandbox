// console.log(document.querySelector("h1").innerText);
// console.log(document.querySelector("ul").textContent);
// console.log(document.querySelector("form").innerHTML);
// console.log(document.querySelector("input").placeholder);
// console.log(document.querySelectorAll("input"));
// console.log(document.querySelector("img").src);
// console.log(document.querySelector("a").href);
// console.log(document.querySelector("form").nextSibling);

///////////////////////changing alements
// const allLis = document.querySelectorAll("li");

// // for (let i = 0; i < allLis.length; i++) {
// //   console.log(allLis[i].innerText);
// //   allLis[i].innerText = "WE ARE THE CHAMPIONS!";
// // }

// for (let li of allLis) {
//   li.innerHTML = "WE ARE <b>THE CHAMPIONS</b>!";
// }
const h1 = document.querySelector("h1");

const p = document.querySelector("p");
p.style.backgroundColor = "teal";
p.style.fontSize = "40px";

const allLis = document.querySelectorAll("li");

const colors = ["red", ["orange"], ["yellow"], ["green"], ["purple"], ["blue"]];

allLis.forEach((li, i) => {
  const color = colors[i];
  console.log(li, i);
  li.style.color = color;
});
