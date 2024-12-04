import React, { useState } from 'react';
import './App.css';

import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

const App = () => {
    const [listTodo, setListTodo] = useState([]);

    const addList = (inputText) => {
        setListTodo([...listTodo, inputText]);
    }

    const deleteItem = (index) => {
        // Use filter to remove the item at the specified index
        const updatedList = listTodo.filter((item, i) => i !== index);
        setListTodo(updatedList);
    };

    return (
        <div className='main-container'>
            <div className='center-container'>
                <TodoInput addList={addList} />
                <h1 className='app-heading'>TODO-LIST</h1>
                <hr />
                {listTodo.map((listItem, i) => {
                    return (
                        <TodoList key={i} item={listItem} deleteItem={() => deleteItem(i)} />
                    );
                })}
            </div>
        </div>
    );
}

export default App;

