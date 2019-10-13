import React, { useState } from "react";
import todolist from "./todolist";

function AddTodo() {
  console.log("Hello");
  let [name, SetName] = useState("");
  let [date, Setdate] = useState("");
  let [priority, Setpriority] = useState("");
  return (
    <div>
      <input
        name="todo-name"
        type="text"
        onChange={event => {
          SetName(event.target.value);
        }}
      />
      <input
        name="todo-date"
        type="text"
        onChange={event => {
          Setdate(event.target.value);
        }}
      />
      <input
        name="todo-priority"
        type="text"
        onChange={event => {
          Setpriority(event.target.value);
        }}
      />
      <button
        onClick={() => {
          if (name && date && priority)
            todolist.push({
              name: name,
              "due-date": date,
              priority: priority
            });
          console.log(todolist);
        }}
      >
        Submit
      </button>
    </div>
  );
}
export default AddTodo;
