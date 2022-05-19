import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ todos }) => {
  return (
    <div className="ul-class">
      {todos.map((data) => (
        <TodoItem data={data} />
      ))}
    </div>
  );
};
export default TodoList;
