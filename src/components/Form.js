import React, { useState } from "react";

function Form(props) {
  const [todo, setTodo] = useState("");
  const [isValid, setIsValid] = useState(true);
  function submitFormHandler(e) {
    e.preventDefault();

    if (todo.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.addTodo(todo);
    setTodo("");
  }

  function inputChangeHandler(e) {
    if (todo.trim().length > 0) {
      setIsValid(true);
    }
    setTodo(e.target.value);
  }

  return (
    <form className="mb-3" onSubmit={submitFormHandler}>
      <div className="form-group mb-3">
        <label
          className="form-label"
          htmlFor="todo"
          style={{ color: isValid ? "black" : "red" }}
        >
          <strong>Todo</strong>
        </label>
        <input
          type="text"
          className="form-control"
          style={{ borderColor: isValid ? "#ccc" : "red" }}
          onChange={inputChangeHandler}
          placeholder="todo"
          value={todo}
        />
      </div>
      <button className="btn btn-success">Submit</button>
    </form>
  );
}

export default Form;
