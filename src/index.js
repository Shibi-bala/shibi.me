import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import MyMind from './Pages/MyMind';
import Resume from './Pages/Resume';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <div style={{alignItems:"center"}}>
      <Header/>
      <Navigation/>
      <hr style={{maxWidth:680, color:"grey"}}/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/my-mind" component={MyMind} />
        <Route path="/projects" component={Projects}/>
        <Route path="/Resume" component={Resume}/>
      </Switch>
      </div>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
