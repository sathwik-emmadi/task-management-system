import React, { useState, useEffect } from "react";

function TaskForm({ addTask, editingTask, updateTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (editingTask) {
      updateTask(editingTask._id, title);
    } else {
      addTask(title, priority);
    }

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Task"
      />

      <button className="add-btn" type="submit">
        {editingTask ? "Update Task" : "Add Task"}
      </button>

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

    </form>
  );
}

export default TaskForm;
