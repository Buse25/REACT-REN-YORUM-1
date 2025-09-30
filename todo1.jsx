import React from "react";
import "../App.css";

export default function Todo1({ todo, onToggle, onDelete }) {
  const { id, content, completed } = todo;

  return (
    <div className="todo-item">
      <label className="todo-left">
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
        />
        <span className={completed ? "todo-content completed" : "todo-content"}>
          {content}
        </span>
      </label>

      <button className="todo-delete" onClick={onDelete} aria-label={`Sil ${id}`}>
        Sil
      </button>
    </div>
  );
}
