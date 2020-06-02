<<<<<<< HEAD
import React from 'react';

import Navbar from './Navbar';

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Navbar />
=======
import React from "react";
import NavBar from "./NavBar";

function Layout(props) {
  // const children = props.children;
  return (
    // <div>
    //   <NavBar />
    //   {props.children}
    // </div>

    <React.Fragment>
      <NavBar />
>>>>>>> develop
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
