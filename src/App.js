import React,{useState} from "react"
import {v4 as uuidv4} from 'uuid'
import './App.css';
import TodoInputForm from "./components/TodoInputForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter"
import TodoCompletedList from "./components/TodoCompletedList";
import TodoNotCompletedList from "./components/TodoNotCompletedList";


// Overall
// 整个项目文件都需要format一下，vscode 右键可以选择。这样更规范。

function App() {
  const [todos,setTodos] = useState([])
  const [completed,setCompleted] = useState(false)
  const [notCompleted,setNotCompleted] =useState(false)

  const addTodo=(text)=>{
    const newTodo = {text,id:uuidv4(),isCompleted:false} // 小规则，把id放在最前边
    setTodos([...todos,newTodo])
  }

  const toggleTodo=(id)=>{
    const newTodos = todos.map(todo=>todo.id===id ? {...todo,isCompleted:!todo.isCompleted} : todo)
    // setTodos([...newTodos]);
    setTodos(newTodos); //newTodos已经是新的array了，直接set就好。
  }

  const removeTodo = (idToRemove) => {
    const newTodos = [...todos].filter((todo)=>todo.id!==idToRemove) // Q：为什么所有的array都要[...x]这样处理？直接todos.filter / setTodos(newTodos) 因为他们的type都是array，好像也不会涉及到copy的问题
    setTodos([...newTodos]);
  };
  const editTodo = (idToEdit)=>{
    const editTodo = [...todos].find((todo)=>todo.id===idToEdit)
    const editText = prompt('Please edit your todo',editTodo.text)
    if(editText){
      const updateTodo = {...editTodo,text:editText}
      const updateTodos = todos.map((todo)=>todo.id===idToEdit ? updateTodo : todo)
    setTodos(updateTodos)
    }
    
  }

  // 以下四个functions，如果每个只用一次的话，我可能会直接写在component props里
  const showCompleted = ()=>{
    setCompleted(true)
  }

  // 以此为例，hideCompleted={()=>{setCompleted(false)}}
  const hideCompleted = ()=>{
    setCompleted(false)
  }
  const showNotCompleted = ()=>{
    setNotCompleted(true)
  }
  const hideNotCompleted = ()=>{
    setNotCompleted(false)
  }
  return (
    <div className="App">
      <h1 className="h1">TodoList</h1>
      <TodoInputForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} editTodo={editTodo}/>
      <TodoFilter showCompleted={showCompleted} showNotCompleted={showNotCompleted}/>
      {completed && <TodoCompletedList hideCompleted={()=>{setCompleted(false)}} todos={todos}/>}
      {notCompleted && <TodoNotCompletedList hideNotCompleted={hideNotCompleted} todos={todos}/>}
    </div>
  )
  
}

export default App;
