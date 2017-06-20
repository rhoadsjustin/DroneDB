import React, { Component } from 'react';
import {Row} from 'react-materialize';
import $ from 'jquery';
import Dronecard from './DroneCard.js';
import Partscard from './PartsCard.js';

class BuildContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parts: {
        name: '',
        price: '',
        link: ''
      },
    }
  }

  loadPartsFromServer() {
    console.log(this.state.categories[0]);

  }

  loadCategoriesFromServer() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3001/api/categories'
    })
    .then((res) => {
      this.setState({ categories: res.categories });
      console.log(this.state.categories);
      $.ajax({
        method: 'GET',
        url: `http://localhost:3001/api/parts?category=${this.state.categories[0]}`
      })
      .then((res) => {
        console.log(res);
        this.setState({
          parts: res.parts
        });
      }, (err) => {
        console.log('get parts error', err)
      })
    }, (err) => {
      console.log('get categories error', err)
    });
  }

  // doStuff() {
  //   this.loadCategoriesFromServer();
  //   this.loadPartsFromServer();
  //
  // }

  componentWillMount() {
  }

  componentDidMount() {
    this.loadCategoriesFromServer()
    //this.loadPartsFromServer()
  }
  render() {

    return (
      <Row>
        <Dronecard />
        {/* <Partscard
          parts={this.state.parts}/> */}
      </Row>
    )
  }
}

export default BuildContainer;
