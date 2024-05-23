import React from 'react';
import styles from './TodoListItem.module.css';

function TodoListItem(props) {
  const { todo, toggleTodo, removeTodo, editTodo } = props;
  const todoClass = todo.isCompleted ? styles.completed : styles.notCompleted;
  return (
    <li className={styles.listItem}>
      <label className={styles.checkboxContainer}>
        <input
          className={styles.customCheckbox}
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={styles.checkmark}></span>
      </label>

      <p className={`${todoClass} ${styles.listText}`}>{todo.text}</p>
      <button className={styles.listButton} onClick={() => removeTodo(todo.id)}>
        Remove
      </button>
      <button className={styles.listButton} onClick={() => editTodo(todo.id)}>
        Edit
      </button>
    </li>
  );
}

export default TodoListItem;
