import React from 'react'
import ShowCompleted from './ShowCompleted'
import ShowNotCompleted from './ShowNotCompleted'


// function TodoFilter(props){
//   const {showNotCompleted,showCompleted}=props
//   return(
//     <div>
//       <ShowCompleted showCompleted={showCompleted}/>
//       <ShowNotCompleted showNotCompleted={showNotCompleted}/>
//     </div>
//   )
// }

// 以上代码更多的写成以下形式，通过arrow function的形式
const TodoFilter = ({showNotCompleted,showCompleted}) => { // 直接把需要的props写在variable里，不需要再解析props了
  return (
    // <Fragment> 或者 <> 是当我们不得不wrap几个components，但又不需要任何attributes时使用
    <>
      <ShowCompleted showCompleted={showCompleted}/>
      <ShowNotCompleted showNotCompleted={showNotCompleted}/>
    </>
  )
}

export default TodoFilter