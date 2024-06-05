import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from './Home';
import Player from './Player';
import './App.css';
import Originals from './Components/Originals';
import Header from './Header';
import Movies from './Components/movies';
import WebSeries from './Components/webSeries';


function App() {
  return (
    <>
      
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/player/:id" component={Player}></Route>
          <Route path="/originals" component={Originals}></Route>     
          <Route path="/movies" component={Movies}></Route>     
          <Route path="/webSeries" component={WebSeries}></Route>     
          </Switch>
        </Router>
    </>
    
  );
}

export default App;
