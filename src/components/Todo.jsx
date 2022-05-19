import React from "react";
import TodoList from "./TodoList";
const Todo = () => {
  const [data, setValue] = React.useState("");
  const [todos, settodo] = React.useState([]);
  const addTodo = (newTodo) => {
    settodo([...todos, newTodo]);
  };
  console.log(todos);
  return (
    <div>
      <h1>TodoList</h1>
      <TodoList todos={todos} />
      <input
        type="text"
        value={data}
        placeholder="Enter somehing"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(data);
        }}
      >
        +
      </button>
    </div>
  );
};
export default Todo;
