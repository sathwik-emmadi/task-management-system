import React, { useState, useEffect } from "react";

import API from "./api";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await API.get("/");

      setTasks(response.data);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title, priority) => {
    await API.post("/", {
      title,
      priority,
    });

    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/${id}`);

    fetchTasks();
  };

  const toggleComplete = async (task) => {
    await API.put(`/${task._id}`, {
      title: task.title,
      completed: !task.completed,
    });

    fetchTasks();
  };

  const updateTask = async (id, title) => {
    await API.put(`/${id}`, {
      title,
    });

    setEditingTask(null);

    fetchTasks();
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase()),
  );

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.completed).length;

  const pendingTasks = tasks.filter((task) => !task.completed).length;

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="app">
      <h1>Task Manager</h1>

      <div className="stats">
        <h3>Total: {totalTasks}</h3>

        <h3>Completed: {completedTasks}</h3>

        <h3>Pending: {pendingTasks}</h3>
      </div>

      <TaskForm
        addTask={addTask}
        editingTask={editingTask}
        updateTask={updateTask}
      />

      <input
        type="text"
        placeholder="Search Tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        setEditingTask={setEditingTask}
      />
    </div>
  );
}

export default App;
