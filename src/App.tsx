import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Admin from "./pages/addClient/AddClient";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Overview } from "./pages/overview/Overview";
import { Layout } from "antd";
import AddClientForm from "./pages/addClient/AddClient";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Layout>
          <Navbar></Navbar>
          <Switch>
            <Route path="/overview" component={Overview}></Route>
            <Route path="/add-client" component={AddClientForm}></Route>
            <Route path="/client-list" component={Overview}></Route>
            <Route path="/request_features" component={Overview}></Route>
            <Route path="/report_issue" component={Overview}></Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
