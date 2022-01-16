import React from 'react'
import { connect } from 'react-redux'
import AddTodo from '../../components/add-todo/add-todo.component'

import './main.styles.css';

export const MainPage = (props) => {
    return (
        <div className='appContainer'>
            <div className="container">
                <h1 className="title">To-Do List</h1>
                <div className="inputWrapper">
                    <AddTodo />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
