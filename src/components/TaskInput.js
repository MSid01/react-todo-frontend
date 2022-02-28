import React from "react";
import { useState } from "react";

const TaskInput = ({ todoState }) => {
  const today = new Date();
  const { todos, setTodos } = todoState;
  const [currentText, setcurrentText] = useState("");
  const addTodo = () => {
    if (currentText.length === 0) {
      alert("KUCHH KARNA NHI HAI KYA?");
      return;
    }
    setTodos([
      ...todos,
      {
        task: currentText,
        date: today.toLocaleString("en-us", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      },
    ]);
  };
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="font-overpass text-2xl p-2 m-2 font-bold ">
        Add Your Tasks here📝
      </h1>
      <textarea
        placeholder="Add something..."
        value={currentText}
        onChange={(e) => {
          setcurrentText(e.target.value);
        }}
        className="min-h-[60px] max-h-[160px] p-2 border-2 p-1 border-black rounded-sm sm:w-2/3 lg:w-2/4 w-3/4"
      ></textarea>
      <button
        onClick={addTodo}
        className="bg-logo-color px-4 py-1 mt-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-[1px] drop-shadow-lg hover:border-gray-500 border-black focus:outline-none"
      >
        ADD
      </button>
    </div>
  );
};

export default TaskInput;
