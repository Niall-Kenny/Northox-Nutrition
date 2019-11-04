import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Admin from "../src/pages/admin/Admin";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={Admin}></Route>
      </Switch>
    </Router>
  );
};

export default App;
