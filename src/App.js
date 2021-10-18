import { Switch, Route, Redirect } from "react-router-dom";
import "./App.styles.scss";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import TodosComponent from "./components/TodosComponent/TodosComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import SignInComponent from "./components/SignInComponent/SignInComponent.jsx";
import { useSelector } from "react-redux";



function App() {
  const id = useSelector((state) => state.user.id);
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (id ? <TodosComponent /> : <HomeComponent />)}
        />
        <Route
          exact
          path="/todos"
          render={() => (id ? <TodosComponent /> : <Redirect to="/signin" />)}
        />

        <Route
          exact
          path="/signin"
          render={() => (id ? <Redirect to="/todos" /> : <SignInComponent />)}
        />
      </Switch>
    </div>
  );
}

export default App;
