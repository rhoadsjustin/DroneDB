import React, { Component } from 'react';
// import {Row} from 'react-materialize';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavbarComp from './NavbarComp.js'
import Footer from './Footer.js'
import Profile from './Profile.js'
import Landing from './Landing.js';
import BuildContainer from './BuildContainer.js';
import GalleryContainer from './GalleryContainer.js';
import { firebase, auth } from './utils/firebase';


class App extends Component {

constructor(props){
  super(props);
  this.state = {
    currentUser: null
  }
}

componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        // set currentUser in App component state
        this.setState({ currentUser });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

loginButtonClicked(e) {
  e.preventDefault();
  // set up provider
  const provider = new firebase.auth.GoogleAuthProvider();
  console.log("signing in")
  // tell Firebase auth to log in with a popup and that provider
  auth.signInWithPopup(provider);
}

logoutButtonClicked(e) {
  e.preventDefault();
  // tell Firebase auth to log out
  console.log("signing out");
  auth.signOut();
}




render() {
    return (

    <Router>
      <div>
        <NavbarComp
          currentUser={ this.state.currentUser }
          loginButtonClicked={ this.loginButtonClicked }
          logoutButtonClicked={ this.logoutButtonClicked }
          />
        <div>
          <Route exact path='/' component={Landing} />
          <Route path='/build' component={BuildContainer} />
          <Route path='/gallery' component={GalleryContainer} />
          <Route path='/profile' component={Profile} />
        </div>

        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
