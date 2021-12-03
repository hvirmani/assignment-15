import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

export default function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(initialTodos);

  useEffect(
    function () {
      window.localStorage.setItem("todos", JSON.stringify(todos));
    },
    [todos]
  );

  function addTodo(task) {
    setTodos([...todos, { id: uuid(), task: task, isCompleted: false }]);
  }

  function deleteTodo(id) {
    let arr = [...todos];
    arr = arr.filter(function (element) {
      return element.id !== id;
    });
    setTodos(arr);
  }

  function toggleTodo(id) {
    let arr = [...todos];
    for (let element of arr) {
      if (element.id === id) {
        element.isCompleted = !element.isCompleted;
      }
    }
    setTodos(arr);
  }

  return (
    <div className="container">
      <div className="col-lg-8  mx-auto py-5">
        <Form addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}
