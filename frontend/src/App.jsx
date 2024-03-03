import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";
// import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
    fetch("http://localhost:3000/todos").then(async function(res){
    const data= await res.json();
    setTodos(data.todos)
  })
  return (
    <>
      <CreateTodo />
      <Todo todos={todos} />
    </>
  );
}

export default App;
