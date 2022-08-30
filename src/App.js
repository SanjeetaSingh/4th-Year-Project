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
import Board4 from './Level4/L4-Board/L4-Board'
import Board5 from './Level5/L5-Board/L5-Board'
import Board6 from './Level6/L6-Board/L6-Board'
import Board7 from './Level7/L7-Board/L7-Board'
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
          <Route path='/level4'><Board4 /></Route>
          <Route path='/level5'><Board5/></Route>          
          <Route path='/level6'><Board6/></Route>
          <Route path='/level7'><Board7/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
