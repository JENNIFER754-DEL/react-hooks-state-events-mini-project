import React from "react";

function Task({ task, onDelete }) {
  // Add defensive programming to handle undefined task
  if (!task) {
    return null; // or display a placeholder
  }

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;