import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
//import { Router } from 'express';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {

  return (
    <div className='App'>

      <Router>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <ul>
                <li>
                    <Link to="/" className={location.pathname === '/' ? 'active' : undefined}>
                        Feedback Home
                    </Link>
                </li>
                <li>
                    <Link to="/feeling" className={location.pathname.startsWith('/feeling') ? 'active' : undefined}>
                        Start Feedback
                    </Link>
                </li>
            </ul>
      </header>
        <div>
          <Route exact path="/feeling">
            <Feeling />
          </Route>
          <Route exact path="/understanding">
            <Understanding />
          </Route>
          <Route exact path="/support">
            <Support />
          </Route>
          <Route exact path="/comments">
            <Comments />
          </Route>
          <Route exact path="/review">
            <Review />
          </Route>
        </div>
      </Router>

    </div>
  );
}

export default App;
