import React from 'react'

function TodoCompletedButton(props){
  const {showCompleted} = props
  return(
    <button onClick={showCompleted}>Show Completed Todos</button>
  )
}

export default TodoCompletedButton

// 整体来说TodoCompletedButton和ShowNotCompleted是一样的structure，而且用的本身就是button自带的功能，没必要再写两个components。这样相当于给棉袄套了个棉袄。
// 两个方案
// 1.直接写<button>到TodoFilter，因为
// 2.如果你想整个project都是一个特有的button style，就写一个通用的component，pass想要的东西（in this case 推荐）
/*
const TodoButton = ({onClickHandler, buttonText}) => {
  return <button onClick={onClickHandler} className={yourClassicStyle}>{buttonText}</button>
}

To implement
<TodoButton onClickHandler={showCompleted} buttonText="Show Completed Todos" >
<TodoButton onClickHandler={showNotCompleted} buttonText="Show NotCompleted Todos" >
*/