import React from "react";
import { BrowserRouter as Router, Route , Redirect , Switch } from "react-router-dom";
import "./App.css";
import Main from "./pages/main";
import Login from "./pages/login";

const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/homepage" exact>
        <Main />
      </Route>
      <Redirect to="/login"></Redirect>
      </Switch>
    </Router>
  );
};

export default App;
