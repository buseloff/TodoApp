import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/todo-reducer/todo.reducer";
import { GoPlus } from "react-icons/go";
import "./AddTodo.styles.css";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (item) => dispatch(addTodo(item)),
  };
};

const AddTodo = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      console.log(props.user.id);
      props.addTodo({
        id: props.todos.length
          ? Math.max(...props.todos.map((el) => el.id)) + 1
          : 1,
        item: todo,
        completed: false,
        userId: props.user.id,
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

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
