import React from "react";
import Checkbox from "./Checkbox";
import "../App.css";

export default function Task({ name, done, onToggle }) {
  return (
    <div className="each-task">
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      {name}
    </div>
  );
}
