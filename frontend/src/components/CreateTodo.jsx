import React from "react";

const CreateTodo = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "flex-start",
      }}
    >
      <input type="text" placeholder="title" />
      <input type="text" placeholder="description" />
      <button>Add a todo</button>
    </div>
  );
};

export default CreateTodo;
