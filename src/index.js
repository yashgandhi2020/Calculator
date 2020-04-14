import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
const screen = document.querySelector("#cal");
const opcodes = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "C",
  "D",
  "+",
  "-",
  "*",
  "/",
  ".",
  "%",
];
const btns = document.querySelectorAll(".btn");
let exp = "";

const handleCalculation = (e) => {
  if (e === "=" || e === "Enter") {
    exp === 0 ? (screen.innerHTML = 0) : (screen.innerHTML = eval(exp));
  } else if (e === "x^2") {
    exp = eval(exp) ** 2;
    screen.innerHTML = exp;
  } else if (e === "D" || e === "Backspace") {
    exp = exp.slice(0, exp.length - 1);
    screen.innerHTML = exp;
  } else if (e === "C" || e === "Escape") {
    exp = "";
    screen.innerHTML = 0;
  } else if (opcodes.includes(e)) {
    exp += e;
    screen.innerHTML = exp;
  }
};

btns.forEach((event) => {
  event.addEventListener("click", (e) => {
    handleCalculation(e.target.innerHTML);
  });
});

window.addEventListener("keydown", ({ key }) => {
  handleCalculation(key);
});
