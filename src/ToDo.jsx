import React from 'react'

const ToDo = ({ todo, index, completeToDo }) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
      {todo.text}
      <button onClick={() => completeToDo(index)}>Completed</button>
    </div>
  )
}

export default ToDo
