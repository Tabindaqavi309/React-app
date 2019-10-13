import React, { useState } from "react";
import "./signup.css";

function SIGNUP() {
  let [name, setName] = useState("");

  let [password, setPassword] = useState("");

  let [email, setEmail] = useState("");

  let [age, setAge] = useState();
  return (
    <div className="main">
      <header>SIGN UP FORM</header>
      <div>
        <section className="mid">
          <input
            className="tags"
            placeholder="Enter Name"
            onChange={event => {
              console.log(name);
              setName(event.target.value);
            }}
            type="text"
            value={name}
            name="Enter name"
          />
          <br></br>
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
            placeholder="Enter Age"
            onChange={event => {
              setAge(event.target.value);
              console.log(age);
            }}
            type="text"
            value={age}
            name="Enter age"
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
              console.log(name);
              console.log(age);
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

export default SIGNUP;
