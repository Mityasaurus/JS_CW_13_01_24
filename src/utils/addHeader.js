import headerTpl from "../templates/header.hbs";
import addText from "./addNewText.js";
import logo from "./logo.json";

const header = document.querySelector(".header");
const headerEl = headerTpl(logo);

console.log(headerEl);
console.log(logo);

addText(headerEl, header);
