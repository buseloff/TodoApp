import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoAdded } from "../../redux/todo-reducer/todo.reducer";
import { GoPlus } from "react-icons/go";
import "./AddTodo.styles.scss";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const todoAdd = (item) => dispatch(todoAdded(item));

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      todoAdd({
        id: todos.length ? Math.max(...todos.map((el) => el.id)) + 1 : 1,
        item: todo,
        completed: false,
        userId: user.id,
      });
      setTodo("");
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />

      <button className="add-btn" onClick={() => add()}>
        <GoPlus />
      </button>
      <br />
    </div>
  );
};

export default AddTodo;
