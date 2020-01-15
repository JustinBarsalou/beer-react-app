import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }

  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/')
    .then(res => res.json())
  //  .then(parsedJson => console.log(parsedJson.result))
    .then(data => this.setState({posts: data}))
  }


  render() {
    return (
      <div>
    {this.state.posts.map((post) => {
      return <div key={post.id}>
      <h2>{post.name}</h2>
      <p>{post.tagline}</p>
      </div>
    })}
    </div>
    )
  }
}


export default App;

