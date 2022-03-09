import React,{useState} from "react";
import { TaskCard } from "./TaskCard";
import { Reorder } from "framer-motion";
const TasksList = ({ todosList, todoState }) => {
  const { todos, setTodos } = todoState;
  const [reorderToggle, setreorderToggle] = useState(false);
  return (
    <div className="md:w-2/4 md:border-l-2 p-2  border-black">
    <div className="flex shadow-bottom-only sticky md:top-0 top-52 z-10 bg-taskinputbg space-x-28  justify-between md:space-x-10 pl-[calc(10%_-_2rem)] text-xl p-5 font-semibold font-Indie-Flower tracking-wider" >
      <h2 >
        {" "}
        📌Your Tasks...🏃
      </h2>
      <div>
      <input className=" h-4 w-4 p-2" type="checkbox" id="reorder" name="reorder" checked={reorderToggle} onChange={()=>{setreorderToggle(!reorderToggle)}} />
      <label htmlFor="reorder"> ReOrder</label>
      </div>
    </div>
      <Reorder.Group className="flex flex-col mt-4 p-2 gap-5" axis="y" onReorder={setTodos} values={todos}>
          {todosList.map((todo, index) => (
            <TaskCard
            key={todo.task}
              todo={todo}
              index={index}
              todoState={todoState}
              reorderState={reorderToggle}
            /> 
          ))}
          </Reorder.Group>
    </div>
  );
};

export default TasksList;
