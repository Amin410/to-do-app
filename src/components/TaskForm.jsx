import React, { useState } from "react";
import "../App.css";
const TaskForm = () => {
  const [taskName, setTaskName] = useState();
  console.log(taskName);
  return (
    <div>
      <form className="box-form" action="">
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
};
export default TaskForm;
