import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/home'><Home /></Route>
          <Route path='/about'><About /></Route>
          <Route path='/help'><Help /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
