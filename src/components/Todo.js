import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";
export default function Todo(props) {
  function deleteTodoHandler() {
    props.deleteTodo(props.id);
  }

  function toggleTodoHandler() {
    props.toggleTodo(props.id);
  }
  return (
    <li
      className="list-group-item"
      style={{ textDecoration: props.isCompleted ? "line-through" : "none" }}
    >
      <span className="me-3">
        <input
          type="checkbox"
          onChange={toggleTodoHandler}
          checked={props.isCompleted}
        />
      </span>
      <span>{props.task}</span>
      <span
        className={"float-end " + styles["span-item"]}
        onClick={deleteTodoHandler}
      >
        <FaTrashAlt />
      </span>
    </li>
  );
}
