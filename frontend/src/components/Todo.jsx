import React from "react";

const Todo = ({ todos }) => {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo.title}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.complete == true ? "completed" : "mark as completed"}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
