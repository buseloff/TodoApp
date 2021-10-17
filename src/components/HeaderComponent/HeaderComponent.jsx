import React from "react";
import "./HeaderComponent.styles.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeUser } from "../../redux/user-reducer/user.reducer";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => dispatch(removeUser()),
  };
};

const HeaderComponent = (props) => (
  <div className="header">
    <div className="options">
      <Link className="option" to="/">
        Main page
      </Link>
      <Link className="option" to="/todos">
        Todos
      </Link>

      {props.user.id ? (
        <div className="option" onClick={() => props.removeUser()}>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
