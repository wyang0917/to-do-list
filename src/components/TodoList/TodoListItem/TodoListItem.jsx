import React from 'react'
import './TodoListItem.css'

function TodoListItem(props){
  const {todo,toggleTodo,removeTodo,editTodo} = props
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
      <button onClick={()=>editTodo(todo.id)}>Edit</button>
    </li>
  )
} 

export default TodoListItem