import React from 'react';
import TodoListItem from './TodoListItem';
import styles from './TodoList.module.css';

function TodoList(props) {
  const { todos, toggleTodo, removeTodo, editTodo } = props;
  return (
    <ul className={styles.listContainer}>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;

// import React,{useState} from "react"
// import {v4 as uuidv4} from 'uuid'

// const ListTodo = ()=>{
//   const [todos,setTodos]=useState([])
//   function handleDelete(){
//     const newTodos = [...todos].filter((currentTodo,id)=>currentTodo.id!==id)
//     setTodos([...newTodos])
//   }
//   return(
//         <div>
//           <input
//           type="checkbox"
//           checked={completed}
//           onChange={()=>{
//             setTodos(
//               todos.map((currentTodo)=>
//               currentTodo.id===id
//               ? {...currentTodo,completed:!currentTodo.completed}
//               : currentTodo
//               )
//             )

//           }}></input>
//           <span style={{
//             textDecoration:completed ? 'line-through' : 'unset'
//           }}>{text}</span>
//           <button onClick={handleDelete}>Delete</button>
//         </div>

//   )
// }

// export default ListTodo
