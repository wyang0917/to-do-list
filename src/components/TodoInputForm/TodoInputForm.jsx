import React, { useState } from 'react';
import styles from './TodoInputForm.module.css';

function TodoInputForm(props) {
  const { addTodo } = props;
  const [inputText, setInputText] = useState('');

  const handleInput = (event) => {
    event.preventDefault();
    if (inputText) {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleInput}>
      <input
        className={styles.input}
        value={inputText}
        type="text"
        placeholder="Please, enter your todo item"
        onChange={(event) => setInputText(event.target.value)}
      />
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoInputForm;

