import "./App.css";
import Navbar from "./components/Navbar";
import TaskInput from "./components/TaskInput";
import TasksList from "./components/TasksList";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const today = new Date();
  const initialarray = [
    {
      id:1,
      task: "Wake up early",
      date: today.toLocaleString("en-us", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    },
    {
      id:2,
      task: "Start Your Day",
      date: today.toLocaleString("en-us", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    },
    {
      id:3,
      task: "Add your tasks",
      date: today.toLocaleString("en-us", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    },
    {
      id:4,
      task: "Reach your goals",
      date: today.toLocaleString("en-us", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    },
  ];

  const getTodoList=()=>{
    const list = localStorage.getItem("todoList");
    if(list.length!==2)
    {
      return JSON.parse(list);
    }
    
    else {
      return initialarray};
  }


  const [todos, setTodos] = useState(getTodoList());
  // if (todos.length === 0) setTodos([...initialarray]);
  useEffect(
    ()=>{
      localStorage.setItem("todoList", JSON.stringify(todos))
    },[todos]
  )

  return (
    <>
      <Navbar />
      <div className="">
        <TaskInput todoState={{ todos: todos, setTodos: setTodos }} />
        <TasksList
          todosList={todos}
          todoState={{ todos: todos, setTodos: setTodos }}
        />
      </div>
    </>
  );
}

export default App;
