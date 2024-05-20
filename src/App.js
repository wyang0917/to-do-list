import React,{useState} from "react"
import {v4 as uuidv4} from 'uuid'
import './App.css';
import TodoInputForm from "./components/TodoInputForm/TodoInputForm";
import TodoList from "./components/TodoList/TodoList";


function App() {
  const [todos,setTodos] = useState([])
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
  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoInputForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </div>
  )
  
}

export default App;
