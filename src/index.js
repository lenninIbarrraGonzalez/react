// const element = document.createElement("h1");
// element.innerText = "Hola Lennin";

// const container = document.getElementById("app");

// container.appendChild(element);

//como si fuera createElemnt
import React from "react";
//como appentChild
import ReactDOM from "react-dom";
import Badge from "./components/Badges";

//esto es jsx por eso importamos React
// const jsx = <h1>Hola Stalin</h1>;

// const element = React.createElement("h1", {}, "hola Ho Chi Min");
// const element = React.createElement(
//   "a",
//   { href: "http://www.allnexus.com.co" },
//   "All Nexus SAS"
// );

// const politic = "¡Comunista!";
// const sum = function () {
//   return 2 + 7;
// };

// const sumpar = () => {
//   return 2 + 3;
// };

// const element = React.createElement("h1", {}, `Hola soy ${politic}`);
// const jsx = <h1>Hola soy {politic}</h1>;
// const jsx = <h1>La suma es: {sum()}</h1>;

// const jsx = <h1>La suma es: {__EXPRESIONES___}</h1>;
// si la expresion es falsa no se va a mostar (undefine, false, 0)

// const jsx = (
//   <div>
//     <h1>Hola soy Lennin</h1>
//     <p>Soy ingeniero FrontEnd</p>
//   </div>
// );

// const element = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, "Mi nombre es Valentina"),
//   React.createElement("p", {}, "Soy ingeniera BackEnd")
// );

const container = document.getElementById("app");

// ReactDOM.render(__que__ , __donde__)
// ReactDOM.render(element, container);
ReactDOM.render(<Badge />, container);
