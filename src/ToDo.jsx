import React from 'react'

const ToDo = ({ todo, index, completeToDo, removeToDo }) => {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
      {todo.text}
      <button onClick={() => completeToDo(index)}>Completed</button>
      <button onClick={() => removeToDo(index)}>Remove</button>
    </div>
  )
}

export default ToDo
