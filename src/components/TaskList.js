import React from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task 
          key={`${task.text}-${index}`} 
          text={task.text}
          category={task.category}
          onTaskDelete={onTaskDelete} 
        />
      ))}
    </div>
  );
}

export default TaskList;