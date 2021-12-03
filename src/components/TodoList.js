import React from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList(props) {
  const todos = props.todos;
  return (
    <ul
      className={
        todos.length === 0
          ? "list-group p-3 "
          : "list-group p-3 " + styles["list"]
      }
    >
      {todos.map(function todo(todo, idx) {
        return (
          <Todo
            key={idx}
            id={todo.id}
            task={todo.task}
            isCompleted={todo.isCompleted}
            deleteTodo={props.deleteTodo}
            toggleTodo={props.toggleTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
