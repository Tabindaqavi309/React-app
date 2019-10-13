import React, { userState } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
//import "./App.css";
//import { userInfo } from "os";
import SIGNUP from "./signup";
import LOGIN from "./login";
import Header from "./header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navigation from "./Components/navigation";
import Details from "./Components/details";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
function App() {
  //  let { bool, setbool } = userState("true");
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/details/:id" component={Details} />
        {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Button variant="primary">Primary</Button> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
