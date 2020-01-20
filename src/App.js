import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css'; 
import Beers from './beers'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: [],
    }

  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
  //  .then(parsedJson => console.log(parsedJson.result))
    .then(data => this.setState({beers: data}))
  }


  render() {

    console.log(this.state.beers)
    return (
      <div>
    {this.state.beers.map((post) => {
      return(
        <div>

          <Beers
          name={post.name}
          />
          
        </div>
      )
    })}
    </div>
    )
  }
}


export default App;

