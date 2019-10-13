import React, { useState } from "react";
import AddTodo from "./addtodo";
import DisplayTodo from "./displaytodo";
import todolist from "./todolist";
function Todo() {
  let [boolAdd, setboolAdd] = useState(false);

  return (
    <div>
      <header>TODO APPLICATION</header>
      <button
        onClick={() => {
          setboolAdd(true);
        }}
      >
        Add Todo
      </button>
      <button>Edit Todo</button>
      <button
        onClick={() => {
          console.log("before" + todolist);
          todolist.pop();
          console.log("after" + todolist);
        }}
      >
        Delete Todo
      </button>
      <button
        onClick={() => {
          setboolAdd(false);
        }}
      >
        Display Todo
      </button>
      <hr />
      <section>{boolAdd ? <AddTodo /> : <DisplayTodo />}</section>
    </div>
  );
}

export default Todo;
