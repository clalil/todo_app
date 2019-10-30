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

  const addToDo = (text) => {
    const newToDo = [...todo, { text }]
    setTodo(newToDo)
  }

  const completeToDo = (index) => {
    const newToDo = [...todo]
    newToDo[index].isCompleted = true
    setTodo(newToDo)
  }

  return (
    <div className="todo-app">
      <div className="todo-list">
      {todo.map((todo, index) => (
        <ToDo 
        key={index} 
        index={index} 
        todo={todo} 
        completeToDo={completeToDo}/>
      ))}
      <ToDoForm addToDo={addToDo}/>
      </div>
    </div>
  )
}

export default App



