import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className='container'>
            <h4>Todos List</h4>
            {/*{props.todos}*/}
            <TodoItem todo={props.todos[1]} />

        </div>
    )
}
