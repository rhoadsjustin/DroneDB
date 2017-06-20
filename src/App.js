import React, { Component } from 'react';
// import {Row} from 'react-materialize';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavbarComp from './NavbarComp.js'
import Footer from './Footer.js'
import Profile from './Profile.js'
import Landing from './Landing.js';
import BuildContainer from './BuildContainer.js';

class App extends Component {
  render() {
    return (

    <Router>
      <div>
        <NavbarComp />
        <div>
          <Route exact path='/' component={Landing} />
          <Route path='/build' component={BuildContainer} />
          <Route path='/profile' component={Profile} />
        </div>

        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
