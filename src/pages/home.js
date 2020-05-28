import React from "react";
import Astronauts from "../images/astronauts.svg";
import platziconf from "../images/platziconf-logo.svg";
import "./styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__info">
        <img src={platziconf} alt="" />
        <h3>PRINT YOUR BADGES</h3>
        <strong>the easiest way to manager your conference</strong>
        <div className="home__info-button">
          <Link className="btn btn-primary" to="/badges">
            Start now
          </Link>
        </div>
      </div>
      <div className="home__logo">
        <img src={Astronauts} alt="" />
      </div>
    </div>
  );
}

export default Home;
