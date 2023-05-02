import React from 'react';
import '../style-sheets/buttons.css'

function Button(props) {

  const isOperator = value => {
    return isNaN(value) && (value != '.') && (value != '=');
  };

  return (
    <div
    className={`container-button ${isOperator(props.children) ? 'operator': null}`}
    onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Button;