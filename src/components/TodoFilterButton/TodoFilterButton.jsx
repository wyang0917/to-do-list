import React from 'react';

function TodoFilterButton(props) {
  const { onClickHandler, buttonText } = props;
  return <button onClick={onClickHandler}>{buttonText}</button>;
}

export default TodoFilterButton;
