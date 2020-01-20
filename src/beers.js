import React, { Component } from 'react'



export default class Beers extends Component {
  constructor(props){
  super(props);
  this.state={
  isClicked: false
  }
  this.isClicked = this.isClicked.bind(this)
  }
  isClicked(){
    this.setState(state => ({
      isClicked: !state.isClicked
    }))
  }

  render() {

    return (
      
      <div>
        <h1 className='name' >{this.props.name}</h1> 
      </div>
    )
  }
}
