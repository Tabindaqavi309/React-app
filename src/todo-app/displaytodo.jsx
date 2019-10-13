import React from "react";
import todolist from "./todolist";

function DisplayTodo() {
  return (
    <div>
      {todolist.map((value, index) => {
        return (
          <ul key={index}>
            <li>{value.name}</li>
            <li>{value["due-date"]}</li>
            <li>{value.priority}</li>
          </ul>
        );
      })}
    </div>
  );
}
export default DisplayTodo;
