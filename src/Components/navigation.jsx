import React, { userState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
//import "./App.css";
//import { userInfo } from "os";
//import SIGNUP from "./signup";
//import LOGIN from "./login";

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <hr />
    </div>
  );
}
export default Navigation;
