import React from 'react';
import EntryScreen from './component/EntryScreen';
import Game from './component/GameScreen';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/" component={EntryScreen}/>
          <Route path="/game" component={Game}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
