import React from "react";
import "../App.css"; // Corrected the relative path
import './TodoList.css';


const TodoList = ({ item, deleteItem }) => {
  return (
    <div className="todo-item">
      <span>{item}</span>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default TodoList;
