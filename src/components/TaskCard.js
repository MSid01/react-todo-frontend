import React from "react";
import Swal from "sweetalert2";

export const TaskCard = ({ todo, todoState, index }) => {
  const { todos, setTodos } = todoState;

  const deleteTodo = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Have you completed this task!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#5d8bf4",
      cancelButtonColor: "#0f172a",
      confirmButtonText: "Yes, delete it!",
      background: "#f1f0ff",
    }).then((result) => {
      if (result.isConfirmed) {
        todos.splice(index, 1);
        setTodos([...todos]);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          background: "#f1f0ff",
          confirmButtonColor:"#5d8bf4"
        });
      }
    });
  };
  return (
    <div className="p-4 bg-slate-900 pb-6 w-full lg:w-1/5 md:w-1/4 sm:w-1/3 flex flex-col bg-logo-color-50 border-2 rounded-md relative border-black">
      <h4 className="text-slate-200 text-[18px] my-1 break-words font-Patrick-Hand tracking-wider text-xl">
        {todo.task}
      </h4>
      <div className="absolute bottom-0 right-0 p-1">
        <p className="text-sm text-slate-400">{todo.date}</p>
      </div>
      <div className="absolute top-0 right-1">
        <button
          onClick={deleteTodo}
          className="flex items-center p-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
