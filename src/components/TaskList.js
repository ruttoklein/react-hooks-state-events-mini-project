import React from "react";
import Task from "./Task"
import { TASKS } from "../data";
function TaskList() {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul>
      {TASKS.map((task) => (
      <Task key={task.id} task={task} />  
      ))}
    </ul>
    </div>
  );
}

export default TaskList;
