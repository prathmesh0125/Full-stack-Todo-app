import React, { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "flex-start",
      }}
    >
      <input type="text" placeholder="title" onChange={(e)=>setTitle(e.target.value)} />
      <input type="text" placeholder="description" onChange={(e)=>setDescription(e.target.value)}/>
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "post",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "content-type": "application/json",
            },
          }).then(async function (res) {
            const data = await res.json();
            alert("todo added");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
};

export default CreateTodo;
