import React from "react";

function TaskItem({ task, deleteTask, toggleComplete, setEditingTask }) {
  return (
    <div className="task-card">
      <div className="task-info">
        <h3 className={task.completed ? "completed" : ""}>{task.title}</h3>
      </div>

      <div className="task-actions">
        <button className="complete-btn" onClick={() => toggleComplete(task)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button className="edit-btn" onClick={() => setEditingTask(task)}>
          Edit
        </button>

        <button className="delete-btn" onClick={() => deleteTask(task._id)}>
          Delete
        </button>

        <p>Priority: {task.priority}</p>
        
      </div>
    </div>
  );
}

export default TaskItem;
