import React from 'react';

function TodoFilterList(props) {
  const { onClickHandler, listHeader, todos, filterCompleted } = props;
  const completedTodos = todos.filter(
    (todo) => todo.isCompleted === filterCompleted
  );
  return (
    <div>
      <h2>{listHeader}</h2>
      {completedTodos.length > 0 ? (
        <ul>
          {completedTodos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      ) : (
        <p>You haven't done anything yet</p>
      )}
      <button onClick={onClickHandler}>Hide</button>
    </div>
  );
}

export default TodoFilterList;
