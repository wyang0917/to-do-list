import React, {useState} from 'react'

function TodoInputForm(props){
  const {addTodo} = props
  const [inputText,setInputText] = useState('')
  
  const handleInput=(event)=>{
    event.preventDefault()
    if(inputText){
      addTodo(inputText)
      setInputText('')
    }
  } 

  return(
    <form onSubmit={handleInput}>
      <input
      value={inputText} 
      type="text" 
      placeholder='Please, enter your todo item'
      onChange={(event)=>setInputText(event.target.value)}/>
      <button 
      type='submit'>Add</button>
    </form>
  )
}

export default TodoInputForm
















// import React,{useState} from "react"
// import {v4 as uuidv4} from 'uuid'

// const InputTodo = ()=>{
//   const [todos,setTodos]=useState([])
//   const [inputText,setInputText] =useState('')
//   function handleInputTodo(){
//     if(inputText){
//       setTodos([...todos,{text:inputText,id:uuidv4 (),completed:false}])
//       setInputText('')
//     }
//   }
//   return(
//       <>
//       {/* input中的onChange事件，onChange={(event)=>setText(event.target.value)，setText接收onChange里的value，再传递给text} */}
//       <input 
//       value={inputText} 
//       placeholder= 'enter your todo' 
//       onChange={(event)=>setInputText(event.target.value)}></input>
//       {/* button中onClick事件,通过spread operator把input中的todo字符串添加到todos，清空input */}
//       <button onClick={handleInputTodo}>
//         Add
//       </button>
//       </>
//   )
// }

// export default InputTodo