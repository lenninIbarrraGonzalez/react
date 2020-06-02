import React from "react";
import logo from "../images/logo.svg";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="" />
            <span className="font-weight-ligth">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;