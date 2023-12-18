import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className='container'>
            <h4>Todos List</h4>
            {props.todos.length === 0 ? "No Todos to Display" :
                props.todos.map((todo) => {
                    return <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />
                })
            }
        </div>
    )
}
