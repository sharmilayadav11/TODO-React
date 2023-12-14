import React from 'react'

export const AddTodo = () => {
    return (
        <div className='container'>
            <h3>AddTodo</h3>
            <form>
                <div className="mb-3">
                    <label for="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label for="desc" className="form-label">Todo Description</label>
                    <input type="password" className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>

        </div>
    )
}
