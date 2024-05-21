import React from 'react'

function TodoCompletedButton(props){
  const {showCompleted} = props
  return(
    <button onClick={showCompleted}>Show Completed Todos</button>
  )
}

export default TodoCompletedButton