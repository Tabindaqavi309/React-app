import React, { useState } from "react";
import "./login.css";

function LOGIN() {
  //let [name, setName] = useState("");

  let [password, setPassword] = useState("");

  let [email, setEmail] = useState("");

  //let [age, setAge] = useState();
  return (
    <div className="main">
      <header>LOG IN FORM</header>
      <div>
        <section className="mid">
          <input
            className="tags"
            placeholder="Enter Email"
            onChange={event => {
              setEmail(event.target.value);
              console.log(email);
            }}
            type="text"
            value={email}
            name="Enter Email"
          />
          <br></br>

          <input
            className="tags"
            placeholder="Enter Password"
            onChange={event => {
              setPassword(event.target.value);
              console.log(password);
            }}
            type="password"
            value={password}
            name="Enter password"
          />
          <br></br>

          <button
            id="btn"
            onClick={() => {
              console.log(password);
              console.log(email);
            }}
          >
            submit
          </button>
        </section>
      </div>
    </div>
  );
}

export default LOGIN;
