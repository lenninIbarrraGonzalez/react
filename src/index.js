// const element = document.createElement("h1");
// element.innerText = "Hola Lennin";

// const container = document.getElementById("app");

// container.appendChild(element);

//como si fuera createElemnt
import React from "react";
//como appentChild
import ReactDOM from "react-dom";

//esto es jsx por eso importamos React
const element = <h1>Hola Stalin</h1>;

const container = document.getElementById("app");

// ReactDOM.render(__que__ , __donde__)
ReactDOM.render(element, container);
