import React, { useState } from 'react'

const ToDoForm = ({ addToDo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if(!value) return;
    addToDo(value)
    setValue('')
  }
  return (
    <div>
      <form onClick={handleSubmit}>
        <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} />
      </form>
    </div>
  )
}

export default ToDoForm