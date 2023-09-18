import React, { useState } from "react";
import "../App.css";

export default function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState();
  function handleSubnit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }
  return (
    <div>
      <form className="box-form" onSubmit={handleSubnit}>
        <button>+</button>
        <input
          type="text"
          placeholder="Add your new task here.."
          value={taskName}
          onChange={(ev) => setTaskName(ev.target.value)}
        />
      </form>
    </div>
  );
}
