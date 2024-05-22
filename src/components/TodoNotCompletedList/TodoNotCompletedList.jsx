import React from "react";

// TodoNotCompletedList 和 TodoCompletedList 也是相同的structure
// 建议写成一个通用的component 然后pass想要的props就好了
function TodoNotCompletedList(props){
  const {hideNotCompleted,todos} = props
  const notCompletedTodos = todos.filter((todo)=>(todo.isCompleted===false))
  return(
    <div>
          <h2>Not Completed List</h2>
          {notCompletedTodos.length > 0 ?
          (<ul>
            {notCompletedTodos.map((todo)=>(
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>):(
            <p>You finish all!</p>
          )
          }
          
          <button onClick={hideNotCompleted}>hide</button>
    </div>
  )
}
export default TodoNotCompletedList