import React,{useState} from "react"
import {v4 as uuidv4} from 'uuid'
import './App.css';
import TodoInputForm from "./components/TodoInputForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter"
import TodoCompletedList from "./components/TodoCompletedList";
import TodoNotCompletedList from "./components/TodoNotCompletedList";


function App() {
  const [todos,setTodos] = useState([])
  const [completed,setCompleted] = useState(false)
  const [notCompleted,setNotCompleted] =useState(false)

  const addTodo=(text)=>{
    const newTodo = {text,id:uuidv4(),isCompleted:false}
    setTodos([...todos,newTodo])
  }

  const toggleTodo=(id)=>{
    const newTodos = todos.map(todo=>todo.id===id ? {...todo,isCompleted:!todo.isCompleted} : todo)
    setTodos([...newTodos]);
  }

  const removeTodo = (idToRemove) => {
    const newTodos = [...todos].filter((todo)=>todo.id!==idToRemove)
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
  const showCompleted = ()=>{
    setCompleted(true)
  }
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
      <h1>TodoList</h1>
      <TodoInputForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} editTodo={editTodo}/>
      <TodoFilter showCompleted={showCompleted} showNotCompleted={showNotCompleted}/>
      {completed && <TodoCompletedList hideCompleted={hideCompleted} todos={todos}/>}
      {notCompleted && <TodoNotCompletedList hideNotCompleted={hideNotCompleted} todos={todos}/>}
    </div>
  )
  
}

export default App;
