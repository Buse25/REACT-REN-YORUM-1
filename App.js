// src/App.js
import "./App.css";
import Todo from "./components/todo";
import Todolist from "./components/todolist";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  };

  // İSİMLERİ AYNEN BÖYLE KULLAN
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div style={{ width: "100%", maxWidth: 700, margin: "0 auto" }}>
      <Todo onCreateTodo={createTodo} />
      {/* İsimler JSX’te de birebir aynı */}
      <Todolist todos={todos} onToggle={toggleComplete} onDelete={deleteTodo} />
    </div>
  );
}
