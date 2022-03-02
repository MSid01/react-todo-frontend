import React from "react";
import { useState } from "react";

const TaskInput = ({ todoState }) => {
  const today = new Date();
  const { todos, setTodos } = todoState;
  const [currentText, setcurrentText] = useState("");
  const addTodo = () => {
    if (currentText.length === 0 || currentText.trim().length===0) {
      alert("Kuchh Karna Nhi hai Kya?");
      return;
    }
    setTodos([
      ...todos,
      {
        id:todos.length+1,
        task: currentText,
        date: today.toLocaleString("en-us", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      },
    ]);
    setcurrentText("");
  };
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl p-2 m-2 font-bold font-Indie-Flower tracking-wider">
        Add Your Tasks here📝
      </h1>
      <textarea
        maxlength ="150"
        placeholder="Add something..."
        value={currentText}
        onChange={(e) => {
          setcurrentText(e.target.value);
        }}
        className="min-h-[60px] max-h-[160px] p-2 border-2 border-black rounded-sm sm:w-2/3 lg:w-2/4 w-3/4"
      ></textarea>
      <button
        onClick={addTodo}
        className="bg-logo-color font-semibold px-4 font-Architects-Daughter py-1 mt-2 text-xl transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white drop-shadow-lg hover:border-gray-500  focus:outline-none"
      >
        ADD
      </button>
    </div>
  );
};

export default TaskInput;
