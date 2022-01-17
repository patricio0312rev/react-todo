import React, { useState } from 'react';

import './add-todo.styles.css'



const AddTodo = (props) => {
    const [todo, setTodo] = useState('');

    return (
        <div>
            <input type="text" name="todo" id="todo" className="inputField" placeholder='Nueva tarea' onChange={(e) => {setTodo(e.target.value)}} value={todo}/>

            <button type="submit" className="submitButton" onClick={() => {
                props.addTask(todo);
                setTodo("");
                }}>Crear</button>
        </div>
    )
}

export default AddTodo;
