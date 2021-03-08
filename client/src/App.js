import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column" style={{height: "100vh"}}>
        <Switch>
          {/* Search Page */}
          <Route />
          {/* Saved Page */}
          <Route />
          {/* For 404 Page */}
          <Route />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
