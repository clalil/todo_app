import React, { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'


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
      <ToDoForm />
      </div>
    </div>
  )
}

export default App



