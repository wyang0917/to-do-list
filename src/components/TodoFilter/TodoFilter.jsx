import React from 'react'
import ShowCompleted from './ShowCompleted'
import ShowNotCompleted from './ShowNotCompleted'


function TodoFilter(props){
  const {showNotCompleted,showCompleted}=props
  return(
    <div>
      <ShowCompleted showCompleted={showCompleted}/>
      <ShowNotCompleted showNotCompleted={showNotCompleted}/>
    </div>
  )
}

export default TodoFilter