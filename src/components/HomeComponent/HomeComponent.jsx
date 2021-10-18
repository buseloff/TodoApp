import React from "react";
import "./HomeComponent.styles.scss";
import { Link } from "react-router-dom";

const HomeComponent = () => (
  <>
    <h1>Welcome to ToDoApp</h1>
    <h3>To continue you should sigh in</h3>
    <Link className="option" to="/signin">
      SIGN IN
    </Link>
  </>
);

export default HomeComponent;
