import React, { Component } from 'react';
import {Row} from 'react-materialize';
import $ from 'jquery';
import Dronecard from './DroneCard.js';
import Partscard from './PartsCard.js';
import OverviewCard from './OverviewCard.js';
var _COUNTER = 0;
let newDrone = {};
let currentDroneVisualList = [];
let currentPart = {};

class BuildContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parts: [
        {
          name: '',
          price: '',
          link: '',
          category: ''
        }
      ],
      finished: false
    }
    this.iteratePartsForward = this.iteratePartsForward.bind(this);
    this.iteratePartsBackward = this.iteratePartsBackward.bind(this);
    this.addParttoDrone = this.addParttoDrone.bind(this);
    this.finishDrone = this.finishDrone.bind(this);
  }

  loadCategoriesFromServer() {
    // grabbing the categories from the database and putting them in an array and then loading the first category
    _COUNTER = 0;
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3001/api/categories'
    })
    .then((res) => {
      this.setState({
        counter: _COUNTER
      });
      this.setState({
        categories: res.categories,
        currentPart: res.categories[this.state.counter]
         });
      $.ajax({
        method: 'GET',
        url: `http://localhost:3001/api/parts?category=${this.state.categories[this.state.counter]}`
      })
      .then((res) => {
        this.setState({
          parts: res
        })
        console.log(this.state.parts)
      }, (err) => {
        console.log('get parts error', err)
      })
    }, (err) => {
      console.log('get categories error', err)
    });
  }

  componentDidMount() {
    // grabbing the categories from the database and putting them in an array and then loading the first category as the component mounts
    this.loadCategoriesFromServer()
  }
  iteratePartsForward(e){
    // increment counter to update current category to the next part category chosen
    e.preventDefault();
    if(_COUNTER <= 9){
      _COUNTER = _COUNTER + 1;
      console.log(_COUNTER);
      this.setState({
        counter : _COUNTER,
        currentPart: this.state.categories[this.state.counter],
        categories: this.state.categories
      });
    $.ajax({
      method: 'GET',
      url: `http://localhost:3001/api/parts?category=${this.state.categories[this.state.counter]}`
    })
    .then((res) => {
      this.setState({
        parts: res
      });
    }, (err) => {
      console.log('get parts error', err)
    })
  }
}
iteratePartsBackward(e) {
  // increment counter to update current category to the previous part category chosen
  e.preventDefault();
    if(_COUNTER > 0){
      _COUNTER = _COUNTER - 1;
      this.setState({
        counter : _COUNTER,
        currentPart: this.state.categories[this.state.counter],
        categories: this.state.categories
      });
      $.ajax({
        method: 'GET',
        url: `http://localhost:3001/api/parts?category=${this.state.categories[this.state.counter]}`
      })
      .then((res) => {
        this.setState({
          parts: res
        });
      }, (err) => {
        console.log('get parts error', err)
      })
    } else {
      this.setState({
        counter : _COUNTER,
        currentPart: this.state.categories[this.state.counter],
        categories: this.state.categories
      });
      $.ajax({
        method: 'GET',
        url: `http://localhost:3001/api/parts?category=${this.state.categories[this.state.counter]}`
      })
      .then((res) => {
        this.setState({
          parts: res
        });
      }, (err) => {
        console.log('get parts error', err)
      })
    }
  }

  addParttoDrone(e, partID, name, price, link, category) {
    console.log("THIS IS THE PART YOU HAVE CHOSEN: ", name + ' ' + price + ' ' + link);
    e.preventDefault();
    console.log("PARTID in add: ", partID);
    newDrone[this.state.currentPart] = partID || null;
    currentPart = {name: name, price: price, link: link, category: category};
    currentDroneVisualList.push(currentPart);
    console.log(currentDroneVisualList);
  }


  finishDrone(e) {
    e.preventDefault();
    _COUNTER++;
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3001/api/drone',
      data: newDrone
    }).then((res) => {
      console.log("your post was successful: ", res);
      this.setState({
        finished: true
      })
    }, (err) => {
      console.log("it didn't post, you are sad: ", err);
    })
  }


  render() {
    console.log(this.state.parts)
    let output = null;
    if(this.state.finished) {
      output = <div>
              <OverviewCard
                currentDroneVisualList={currentDroneVisualList}/>
            </div>
    } else {
      output =
      <div>
              <Dronecard
                currentDrone={currentDroneVisualList}
                currentPart={this.state.currentPart}/>
              <Partscard
                counter={_COUNTER}
                addParttoDrone={this.addParttoDrone}
                iteratePartsBackward={this.iteratePartsBackward}
                iteratePartsForward={this.iteratePartsForward}
                currentPart={this.state.currentPart}
                finishDrone={this.finishDrone}
                parts={this.state.parts} />
      </div>
                }
    return (
      <Row>
          {output}
      </Row>
    )
  }
}

export default BuildContainer;
