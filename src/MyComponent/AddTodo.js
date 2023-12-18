import React from 'react'

export const AddTodo = ({ addTodo }) => {
    return (
        <div className='container'>
            <h3>AddTodo</h3>
            <form onSubmit={(event) => {
                event.preventDefault();
                const title = event.target.title.value;
                const desc = event.target.desc.value;
                addTodo({ desc, title });
            }}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control"
                        name="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" className="form-control"
                        name="desc" />
                </div>
                <button type="submit" className="btn btn-sm 
                btn-success">Add Todo</button>
            </form>

        </div>
    )
}
