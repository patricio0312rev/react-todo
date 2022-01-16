import React from 'react';

import './todo-item.styles.css';

export default function TodoItem() {
    return (
        <div>
            <div className="taskContainer">
                <div className="taskWrapper">
                    <p className="task">Cook Dinner</p>

                    <div className="iconsWrapper">
                        <i className="fas fa-check-circle completedIcon" ></i>
                        <i className="fas fa-trash-alt deleteIcon" ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
