import React from 'react'
import { connect } from 'react-redux'
import AddTodo from '../../components/add-todo/add-todo.component'
import TodoItem from '../../components/todo-item/todo-item.component';
import { addTask, completedTask, deleteTask } from '../../redux/actions';

import './main.styles.css';

const MainPage = (props) => {
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
                                <TodoItem key={key} text={task.text} completed={task.completed} deleteTask={(task) => props.deleteTask(task)} completedTask={(task) => props.completedTask(task)} />
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
    deleteTask: (task) => dispatch(deleteTask(task)),
    completedTask: (task) => dispatch(completedTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
