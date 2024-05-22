import React from "react";

function ShowNotCompleted(props){
    const {showNotCompleted} = props
  return(
    <button onClick={showNotCompleted}>Show NotCompleted Todo</button>
  )
}

export default ShowNotCompleted