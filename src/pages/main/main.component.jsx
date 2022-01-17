import React from 'react'
import { connect } from 'react-redux'
import AddTodo from '../../components/add-todo/add-todo.component'
import TodoItem from '../../components/todo-item/todo-item.component';
import { addTask } from '../../redux/actions';

import './main.styles.css';

const MainPage = (props) => {
    console.log(props.taskItems);
    return (
        <div className='appContainer'>
            <div className="container">
                <h1 className="title">To-Do List</h1>
                <div className="inputWrapper">
                    <AddTodo addTask={(todo) => props.addTask(todo)} />
                    <hr className="separator" />

                    {
                        props.taskItems.map((task, key) => {
                            return (
                                <TodoItem key={key} text={task.text} completed={task.completed} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    taskItems: state.taskItems,
})

const mapDispatchToProps = (dispatch) => ({
    addTask: (todo) => dispatch(addTask(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
