import React from "react";

const Todo = () => {
  const [value, setValue] = React.useState("");
  console.log(value);
  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="Enetr Somthing"
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Add</button>
    </div>
  );
};
export default Todo;
