import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// All the levels and pages game navigates to
import Home from './pages/Home';
import About from './pages/About';
import Board2 from './Level2/L2-Board/Level-2-Board';
import Board3 from './Level3/L3-Board/Board-3'
import Board4 from './Level4/L4-Board/L4-Board'
import Board5 from './Level5/L5-Board/L5-Board'
import Board6 from './Level6/L6-Board/L6-Board'
import Board7 from './Level7/L7-Board/L7-Board'
import Board8 from './Level8/L8-Board/L8-Board'
import Board9 from './Level9/L9-Board/L9-Board'
import Board10 from './Level10/L10-Board/L10-Board'
import Board11 from './Level11/L11-Board/L11-Board'
import Board12 from './Level12/L12-Board/L12-Board'
import Board13 from './Level13/L13-Board/L13-Board'
import Board14 from './Level14/L14-Board/L14-Board'
import Board15 from './Level15/L15-Board/L15-Board'
import Board16 from './Level16/L16-Board/L16-Board'
import Board17 from './Level17/L17-Board/L17-Board'
import Board18 from './Level18/L18-Board/L18-Board'
import Board19 from './Level19/L19-Board/L19-Board'
import Board20 from './Level20/L20-Board/L20-Board'
import Board21 from './Level21/L21-Board/L21-Board'
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
          <Route path='/level5'><Board5 /></Route>
          <Route path='/level6'><Board6 /></Route>
          <Route path='/level7'><Board7 /></Route>
          <Route path='/level8'><Board8 /></Route>
          <Route path='/level9'><Board9 /></Route>
          <Route path='/level10'><Board10 /></Route>
          <Route path='/level11'><Board11 /></Route>
          <Route path='/level12'><Board12 /></Route>
          <Route path='/level13'><Board13 /></Route>
          <Route path='/level14'><Board14 /></Route>
          <Route path='/level15'><Board15 /></Route>
          <Route path='/level16'><Board16 /></Route>
          <Route path='/level17'><Board17 /></Route>
          <Route path='/level18'><Board18 /></Route>
          <Route path='/level19'><Board19 /></Route>
          <Route path='/level20'><Board20 /></Route>
          <Route path='/level21'><Board21 /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
