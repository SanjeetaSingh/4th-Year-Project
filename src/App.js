import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Board2 from './components/Level 2/L2-Board/Level-2-Board';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/'> <Home /></Route>
          <Route path='/about'><About /></Route>
          <Route path='/level2'><Board2 /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
