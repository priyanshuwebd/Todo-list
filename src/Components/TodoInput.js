import React, { useState } from "react";
import '../App.css';


const TodoInput = ({ addList }) => {
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    if (inputText.trim() !== "") {
      addList(inputText);
      setInputText("");
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
