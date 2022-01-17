import React from 'react';

import './todo-item.styles.css';

export default function TodoItem({ text, completed, deleteTask }) {
    console.log(text);
    return (
        <div>
            <div className="taskContainer">
                <div className="taskWrapper">
                    <p className="task">{ text }</p>

                    <div className="iconsWrapper">
                        <i className="fas fa-check-circle completedIcon" ></i>
                        <i className="fas fa-trash-alt deleteIcon" onClick={() => deleteTask(text)} ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
