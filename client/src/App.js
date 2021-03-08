import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column" style={{height: "100vh"}}>
        <Switch>
          {/* Search Page */}
          <Route exact path={["/", "/search"]} component={Search}/>
          {/* Saved Page */}
          <Route exact path="/saved" component={Saved}/>
          {/* For 404 Page */}
          <Route />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
