import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SIGNUP from "./signup";
import LOGIN from "./login";
import "./header.css";
import { EPERM } from "constants";
import { tsPropertySignature } from "@babel/types";
function Header(props) {
  return (
    <div className="App">
      <div className="tags">
        <div className="a1">
          <Link to="/">signup</Link>
        </div>

        <div className="a1">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
