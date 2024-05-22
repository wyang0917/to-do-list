import React from 'react'

// TodoNotCompletedList 和 TodoCompletedList 也是相同的structure
// 建议写成一个通用的component 然后pass想要的props就好了
function TodoCompletedList(props){
  const {hideCompleted,todos} = props
  const completedTodos = todos.filter((todo)=>(todo.isCompleted===true)) // 可以直接todos.filter((todo)=>todo.isCompleted）
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