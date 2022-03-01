import "./App.css";
import Navbar from "./components/Navbar";
import TaskInput from "./components/TaskInput";
import TasksList from "./components/TasksList";
import { useState } from "react";

function App() {
  const today = new Date();
  const initialarray = [
    {
      task: "Wake up early",
      date: today.toLocaleString("en-us", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    },
    {
      task: "Start Your Day",
      date: today.toLocaleString("en-us", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    },
    {
      task: "Add your tasks",
      date: today.toLocaleString("en-us", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    },
    {
      task: "Reach your goals",
      date: today.toLocaleString("en-us", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    },
  ];
  const [todos, setTodos] = useState(initialarray);
  if (todos.length === 0) setTodos([...initialarray]);
  return (
    <>
      <Navbar />
      <div className="bg-taskinputbg min-h-[91vh]">
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
