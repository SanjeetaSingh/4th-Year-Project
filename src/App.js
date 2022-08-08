import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Board2 from './Level2/L2-Board/Level-2-Board';
import Board3 from './Level3/L3-Board/Board-3'
import Header from './Header/Header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/'> <Home /></Route>
          <Route path='/about'><About /></Route>
          <Route path='/level2'><Board2 /></Route>
          <Route path='/level3'><Board3 /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
