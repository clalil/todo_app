import React, { useState } from 'react'
import ToDo from './ToDo'

const App = () => {
  const [todo, setTodo] = useState([
    {
      text: 'Today\'s first task',
      isCompleted: false
    }
  ])

  return (
    <div className="todo-app">
      <div className="todo-list">
      {todo.map((todo, index) => (
        <ToDo key={index} index={index} todo={todo} />
      ))}
      </div>
    </div>
  )
}

export default App



