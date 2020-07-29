import React from "react";
import "./styles/NotFound.css";
import img404 from "../images/img404.webp";

function NotFound() {
  return (
    <div className="contenedor">
      <img src={img404} alt="" />
      <h1>404: Not Found</h1>
      <p>Pailas</p>
    </div>
  );
}

export default NotFound;
