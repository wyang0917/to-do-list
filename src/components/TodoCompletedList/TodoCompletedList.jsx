import React from 'react'

function TodoCompletedList(props){
  const {hideCompleted,todos} = props
  const completedTodos = todos.filter((todo)=>(todo.isCompleted===true))
  return(
    <div>
      <h2>Completed Todos</h2>
      {completedTodos.length > 0 ?(
        <ul>
          {completedTodos.map((todo)=>(
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      ):<p>You haven't done anything yet</p>}

      <button onClick={hideCompleted}>Hide</button>
    </div>
  )
}

export default TodoCompletedList