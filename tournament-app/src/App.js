import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import About from './components/About';
import Profile from './components/Profile';
import Tournament from './components/Tournament'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={About} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/tournament" exact component={Tournament} />
        </Switch>
      </div>
    </Router>
  );
}

const HomePage = () => (
  <div>
    <h1>Home Page!</h1>
  </div>
)


export default App;