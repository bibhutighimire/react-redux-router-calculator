import React from 'react';
import './App.css';
import Nav from './Component/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Calculator from './Component/Calculator';
import PastCalculations from './Component/PastCalculations';
import Home from './Component/Home';

function App() {
  return (
    <Router>
    <main className="container">
      <h1>My Calculator</h1>
    <Nav />
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Home" component={Home} />
    <Route path="/Calculator" component={Calculator} />
    <Route path="/PastCalculations" component={PastCalculations} />
    </Switch>
    
    
    </main>
    </Router>
  );
}

export default App;
