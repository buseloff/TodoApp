import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  todoCompleted,
  todoRemoved,
  todoUpdated,
} from "../../redux/todo-reducer/todo.reducer";
import TodoItem from "../TodoItem/TodoItem";
import "./DisplayTodos.styles.scss";

const DisplayTodos = () => {
  const [sort, setSort] = useState("active");
  const todos = useSelector((state) => state.todos);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const todoRemove = (id) => dispatch(todoRemoved(id));
  const todoUpdate = (item) => dispatch(todoUpdated(item));
  const todoComplete = (id) => dispatch(todoCompleted(id));
  return (
    <div className="display-todos">
      <div className="buttons">
        <button onClick={() => setSort("active")}>Active</button>
        <button onClick={() => setSort("completed")}>Completed</button>
        <button onClick={() => setSort("all")}>All</button>
      </div>
      <ul>
        {todos.length > 0 && sort === "active"
          ? todos.map((item) => {
              return (
                item.completed === false &&
                item.userId === user.id && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={todoRemove}
                    updateTodo={todoUpdate}
                    completeTodo={todoComplete}
                  />
                )
              );
            })
          : null}

        {todos.length > 0 && sort === "completed"
          ? todos.map((item) => {
              return (
                item.completed === true &&
                item.userId === user.id && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={todoRemove}
                    updateTodo={todoUpdate}
                    completeTodo={todoComplete}
                  />
                )
              );
            })
          : null}

        {todos.length > 0 && sort === "all"
          ? todos.map((item) => {
              return (
                item.userId === user.id && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={todoRemove}
                    updateTodo={todoUpdate}
                    completeTodo={todoComplete}
                  />
                )
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default DisplayTodos;
