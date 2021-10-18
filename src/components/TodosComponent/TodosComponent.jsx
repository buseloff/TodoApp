import React from "react";
import "./TodosComponent.styles.scss";
import DisplayTodos from "../DisplayTodos/DisplayTodos";
import AddTodo from "../AddTodo/AddTodo";

const TodosComponent = () => (
  <div>
    <AddTodo />
    <DisplayTodos />
  </div>
);

export default TodosComponent;
