import React, { useState } from "react";
import List from "./List";
import Input from "./Input";
const Main = () => {
  const [todos, setTodos] = useState([]);
  const addEventHandler = todo => {
    // console.log(todo);
    setTodos(items => {
      // const newItems = [...items]
      // newItems.push(todo)
      return [...items, todo];
    });

    console.log("event", todos);
  };
  return (
    <div>
      <Input addThis={addEventHandler} />
      <List items={todos} />
    </div>
  );
};
export default Main;
