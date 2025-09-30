// src/components/Todolist.jsx
import React from "react";
import Todo1  from './todo1'

export default function Todolist({ todos, onToggle, onDelete }) {
  if (!todos || todos.length === 0) {
    return <div style={{ marginTop: "20px", opacity: 0.7 }}>Henüz görev yok</div>;
  }

  return (
    <div style={{width: '100%', marginTop: '50px'}}>
      {
        todos && todos.map((t) => (
            <Todo1
          key={t.id}
          todo={t}
          onToggle={() => onToggle(t.id)}
          onDelete={() => onDelete(t.id)}
        />
        ))
      }
     
    <ul style={{ width: "100%", marginTop: "20px" }}>
      {todos.map((t) => (
        <li
          key={t.id}
          style={{
            padding: "8px 10px",
            borderBottom: "1px solid #eee",
            textAlign: "left",
          }}
        >
          {t.content}
        </li>
      ))}
    </ul>
    </div>
  );
}
