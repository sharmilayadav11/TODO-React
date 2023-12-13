import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className='container'>
            <h4>Todos List</h4>
            {/*{props.todos}*/}
            {props.todos.length === 0 ? "No Todos to Display" :
                props.todos.map((todo, i) => {
                    return <TodoItem key={todo + i} todo={todo} onDelete={props.onDelete} />
                })
            }
        </div>
    )
}
