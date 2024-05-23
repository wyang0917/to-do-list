import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoInputForm from './components/TodoInputForm';
import TodoList from './components/TodoList';
import TodoFilterButton from './components/TodoFilterButton';
import TodoFilterList from './components/TodoFilterList';

function App() {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [notCompleted, setNotCompleted] = useState(false);

  const addTodo = (text) => {
    const newTodo = { id: uuidv4(), text, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  const removeTodo = (idToRemove) => {
    const newTodos = todos.filter((todo) => todo.id !== idToRemove);
    setTodos(newTodos);
  };
  const editTodo = (idToEdit) => {
    const editTodo = todos.find((todo) => todo.id === idToEdit);
    const editText = prompt('Please edit your todo', editTodo.text);
    if (editText) {
      const updateTodo = { ...editTodo, text: editText };
      const updateTodos = todos.map((todo) =>
        todo.id === idToEdit ? updateTodo : todo
      );
      setTodos(updateTodos);
    }
  };
  const showCompleted = () => {
    setCompleted(true);
  };
  const showNotCompleted = () => {
    setNotCompleted(true);
  };
  const hideCompleted = () => {
    setCompleted(false);
  };
  const hideNotCompleted = () => {
    setNotCompleted(false);
  };
  return (
    <div className="App">
      <h1 className="appHeader">TodoList</h1>
      <TodoInputForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
      <TodoFilterButton
        onClickHandler={showCompleted}
        buttonText={`What you have done`}
      />
      <TodoFilterButton
        onClickHandler={showNotCompleted}
        buttonText={`You need to do`}
      />
      {completed && (
        <TodoFilterList
          onClickHandler={hideCompleted}
          todos={todos}
          listHeader={`What you have done`}
          filterCompleted={completed}
        />
      )}
      {notCompleted && (
        <TodoFilterList
          onClickHandler={hideNotCompleted}
          todos={todos}
          listHeader={`You need to do`}
          filterCompleted={!notCompleted}
        />
      )}
    </div>
  );
}

export default App;
