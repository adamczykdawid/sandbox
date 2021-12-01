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
// // }
// const h1 = document.querySelector("h1");

// const p = document.querySelector("p");
// p.style.backgroundColor = "teal";
// p.style.fontSize = "40px";

// const allLis = document.querySelectorAll("li");

// const colors = ["red", ["orange"], ["yellow"], ["green"], ["purple"], ["blue"]];

// allLis.forEach((li, i) => {
//   const color = colors[i];
//   console.log(li, i);
//   li.style.color = color;
// });

///changing style all by one
// const todo = document.querySelector("#todos .todo");

// // todo.style.color = "gray";
// // todo.style.textDecoration = "line-through";
// // todo.style.opacity = "50%";
// todo.classList.remove("done");

///////////////////////creating elements

// const newh2 = document.createElement("h2");
// newh2.innerText = "I like animals!";

// newh2.classList.add("special");
// document.querySelector("section").appendChild(newh2);

// const newIMG = document.createElement("img");
// newIMG.src =
//   "https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1.&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80";

// newIMG.style.width = "300px";
// document.body.appendChild(newIMG);

//////////////////////////////////adding elements
const newVid = document.createElement("a");
newVid.innerText = "here you dum dum";
newVid.href = "https://www.youtube.com/watch?v=QQNL83fhWJU";
newVid.target = "_blank";
const firstP = document.querySelector("p");

firstP.appendChild(newVid);
const newLi = document.createElement("li");
newLi.innerText = "HEJKA! I'm a new LI";
const firstLi = document.querySelector("li.todo");
newLi.classList.add("todo");
// firstLi.append(newLi);
firstLi.insertAdjacentElement("beforebegin", newLi);

///////////////////////////removing

const parentEl = document.querySelector("section ul");
const target = parentEl.querySelector(".special");

// parentEl.removeChild(target);

//or only remove() - you do not need to specify the parent and you simply pick the target.

target.remove();
