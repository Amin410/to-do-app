import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import Checkbox from "./components/Checkbox";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }
  console.log(Checkbox);
  return (
    <main>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, id, index) => (
        <Task
          key={id}
          {...task}
          onToggle={(done) => updateTaskDone(index, done)}
        />
      ))}
    </main>
  );
};

export default App;
