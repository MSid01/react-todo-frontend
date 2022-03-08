import React from "react";
import { TaskCard } from "./TaskCard";
const TasksList = ({ todosList, todoState }) => {
  return (
    <>
      <h2 className="ml-[calc(10%_-_2rem)] text-xl mt-4 font-semibold font-Indie-Flower tracking-wider">
        {" "}
        📌Your Tasks...🏃
      </h2>
      <div className="mt-4 p-2 flex flex-wrap gap-5 justify-center">
          {todosList.map((todo, index) => (
            <TaskCard
            key={index}
              todo={todo}
              index={index}
              todoState={todoState}
            />
            
          ))}
          </div>
    </>
  );
};

export default TasksList;
