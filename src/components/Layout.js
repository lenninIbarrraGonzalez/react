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
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
