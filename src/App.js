import { Switch, Route, Redirect } from "react-router-dom";
import "./App.styles.css";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import TodosComponent from "./components/TodosComponent/TodosComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import SignInComponent from "./components/SignInComponent/SignInComponent.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

function App(props) {
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            props.user.id ? <TodosComponent /> : <HomeComponent />
          }
        />
        <Route
          exact
          path="/todos"
          render={() =>
            props.user.id ? <TodosComponent /> : <Redirect to="/signin" />
          }
        />

        <Route
          exact
          path="/signin"
          render={() =>
            props.user.id ? <Redirect to="/todos" /> : <SignInComponent />
          }
        />
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps)(App);
