import React from "react";

import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleComplete, setEditingTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <div>
          <h2>No Tasks Found</h2>
          <br></br>
          <p>Add Your First Task</p>
        </div>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            setEditingTask={setEditingTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
