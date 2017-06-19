import React, { Component } from 'react';
import {Footer as Footy} from 'react-materialize';
// import {Link} from 'react-router';


class Footer extends Component {
  render() {
    return (
      <Footy copyrights="&copy 2015 Copyright Text"
        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
          </ul>
        }
        className='example'>
        <h5 className="white-text">Thanks for Building</h5>
        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
      </Footy>

    )
  }
}

export default Footer;
