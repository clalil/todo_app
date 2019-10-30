import React from 'react'

const ToDo = ({ todo, index }) => {
  return (
    <div className="todo">
      {todo.text}
    </div>
  )
}

export default ToDo
