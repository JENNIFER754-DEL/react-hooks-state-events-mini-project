import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  // Add check for empty tasks array
  if (!tasks || tasks.length === 0) {
    return <div>No tasks to display</div>;
  }

  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
