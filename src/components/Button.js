import React from "react";
import './styles.css';

const Button = (props) => {
  return <button onClick={props.onClick}>{props.label} </button>;
};

export default Button;
