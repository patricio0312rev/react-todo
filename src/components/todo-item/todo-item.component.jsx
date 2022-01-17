import React from 'react';

import './todo-item.styles.css';

export default function TodoItem({ text, completed, deleteTask, completedTask }) {
    return (
        <div>
            <div className="taskContainer">
                <div className="taskWrapper">
                    <p className="task" style={ completed ? {textDecoration: 'line-through'} : {textDecoration:'none'} }>{ text }</p>

                    <div className="iconsWrapper">
                        <i className="fas fa-check-circle completedIcon" onClick={() => completedTask(text)}></i>
                        <i className="fas fa-trash-alt deleteIcon" onClick={() => deleteTask(text)} ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
