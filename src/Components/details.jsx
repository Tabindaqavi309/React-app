//import React from 'react'

import React, { useEffect, useState } from "react";
//import { tsPropertySignature } from "@babel/types";
import { data } from "./services";
console.log(data);
function Details(props) {
  let [user, SetUsers] = useState(null);
  //const [user, setUser] = useState(null)
  console.log("hell");
  const setUserDetails = () => {
    const { id } = props.match.params; // ES6
    // const id = props.match.params.id //Normal
    console.log(id);
    if (id) {
      // const newUser = data.find((item) => {
      //   console.log(item.id, id, item.id == id)
      //   return item.id == id; //true
      // })
      // const newUser = data.find((item) => item.id.toString() === id)
      const newUser = data.find(item => `${item.id}` === id);
      SetUsers(newUser);
    }
  };

  useEffect(() => {
    // this is componentDidMount
    console.log("componentDidMount");
    setUserDetails();
    return () => {
      console.log("Component Will Unmount Executed");
    };
  }, []);

  return (
    <div>
      <h1>User Detail</h1>
      {user ? (
        <ul>
          <li>ID: {user.id}</li>
          <li>NAME: {user.name}</li>
          <li>CLASS: {user.class}</li>
        </ul>
      ) : null}
      {/* <ul>
        <li>ID: {user ? user.id : null}</li>
        <li>NAME: {user ? user.name : null}</li>
        <li>CLASS: {user ? user.class : null}</li>
      </ul> */}
    </div>
  );
}

export default Details;
