import React from "react";
import "./HeaderComponent.styles.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userRemoved } from "../../redux/user-reducer/user.reducer";

const HeaderComponent = () => {
  const id = useSelector((state) => state.user.id);

  const dispatch = useDispatch();
  const userRemove = () => dispatch(userRemoved());
  return (
    <div className="header">
      <div className="options">
        <Link className="option" to="/">
          Main page
        </Link>
        <Link className="option" to="/todos">
          Todos
        </Link>

        {id ? (
          <div className="option" onClick={() => userRemove()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
