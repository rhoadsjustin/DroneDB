import React, { Component } from 'react';
import $ from 'jquery';
import Gallery from './Gallery.js';

class GalleryContainer extends Component {
  constructor() {
    super()
    this.state = {
      drones: []
    }
  }
  componentDidMount(){
    this.getDrones();
  }

  getDrones(){
    $.ajax({
      method: 'GET',
      url: '/drone'
    }).then((res) => {
      this.setState({
        drones: res
      })
      console.log(this.state.drones)
  }, (err) => {
    console.log('get drones error', err)
  });
}




render() {
  return(
    <div>
      <Gallery
        allDrones={this.state.drones}/>
    </div>
  )
}
}
export default GalleryContainer
