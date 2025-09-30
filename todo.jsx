import React, { useState } from "react";
import "../App.css";

export default function Todo({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    const value = newTodo.trim();
    if (!value) return;

    const request = {
      id: Math.floor(Math.random() * 99999),
      content: value,
      completed: false,
    };

    onCreateTodo(request);
    setNewTodo(""); // input temizle
  };

  return (
    <div className="todo">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="giriniz"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            createTodo();
          }
        }}
      />
      <button className="todo-button" onClick={createTodo}>
        To do oluştur
      </button>
    </div>
  );
}
