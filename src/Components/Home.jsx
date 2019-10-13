import React from "react";
//import { tsPropertySignature } from "@babel/types";
import { data } from "./services";

function Home(props) {
  const ShowDetails = id => {
    props.history.push(`/details/` + id);
  };

  return (
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Class</td>
          <td />
          <td />
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.class}</td>
              <td>
                <button onClick={() => ShowDetails(user.id)}>
                  show details
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Home;
