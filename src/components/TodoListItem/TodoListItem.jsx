import React from 'react'
import './TodoListItem.css'

function TodoListItem({todo,toggleTodo,removeTodo}){
  const todoClass = todo.isCompleted ? 'completed' :'not-completed'
  return(
    <li>
      <input 
      type="checkbox" 
      checked={todo.isCompleted}
      onChange={()=>toggleTodo(todo.id)}/>
      <span className={todoClass}>
        {todo.text}
      </span>
      <button onClick={()=>removeTodo(todo.id)}>Remove</button>
      <button>Edit</button>
    </li>
  )
} 

export default TodoListItem