function createMenuItem(name) {
  let div = document.createElement("div");
  div.textContent = name;
  div.className = "header";
  return div;
}
function createMenuItem2(name) {
  let div = document.createElement("div");
  div.textContent = name;
  div.className = "content";
  return div;
}
function createMenuItem3(name) {
  let div = document.createElement("div");
  div.textContent = name;
  div.className = "nav";
  return div;
}
function createMenuItem4(name) {
  let div = document.createElement("div");
  div.textContent = name;
  div.className = "home btn_header";
  div.id = "home1";
  return div;
}
function createMenuItem5(name) {
  let div = document.createElement("div");
  div.textContent = name;
  div.className = "menu btn_header";
  div.id = "menu1";

  return div;
}
function createMenuItem6(name) {
  let div = document.createElement("div");
  div.textContent = name;
  div.className = "contact btn_header";
  div.id = "contact1";

  return div;
}
function createMenuItem7(name) {
  let img = document.createElement("img");
  img.textContent = name;
  img.className = "img1";
  img.id = "img1";
  img.src = "../Screenshot 2022-07-12 154058.png";
  return img;
}
function createMenuItem8(name) {
  let img = document.createElement("img");
  img.textContent = name;
  img.className = "img2";
  img.id = "img2";
  img.src = "../Screenshot 2022-07-12 160016.png";
  return img;
}
function createMenuItem9(name) {
  let img = document.createElement("img");
  img.textContent = name;
  img.className = "img3";
  img.id = "img3";
  img.src = "../Screenshot 2022-07-12 160759.png";
  return img;
}

const content = document.querySelector("#content");
content.appendChild(createMenuItem());
content.appendChild(createMenuItem2());

const header = document.querySelector(".header");
header.appendChild(createMenuItem3(""));

const nav = document.querySelector(".nav");
nav.appendChild(createMenuItem4("Home"));
nav.appendChild(createMenuItem5("Menu"));
nav.appendChild(createMenuItem6("Contact"));

const content2 = document.querySelector(".content");
content2.appendChild(createMenuItem7(""));
content2.appendChild(createMenuItem9(""));
content2.appendChild(createMenuItem8(""));

let btn = document.getElementById("home1");
btn.addEventListener("click", btn_none);
function btn_none() {
  document.getElementById("img1").style.display = "none";
  document.getElementById("img3").style.display = "block";
}
let btn2 = document.getElementById("contact1");
btn2.addEventListener("click", btn_none1);
function btn_none1() {
  document.getElementById("img1").style.display = "block";
  document.getElementById("img3").style.display = "none";
}
