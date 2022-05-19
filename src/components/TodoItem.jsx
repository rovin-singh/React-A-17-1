import React from "react";
import "./TodoItem.css";
const TodoItem = ({ data }) => {
  return (
    <div>
      <p>{data}</p>
      <input type="radio" />
    </div>
  );
};

export default TodoItem;
