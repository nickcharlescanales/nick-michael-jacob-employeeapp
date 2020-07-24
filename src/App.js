import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = { apiResponse: "" };
}

callAPI() {
  fetch("http://localhost:4000")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
}

componentDidMount() {
  this.callAPI();
};


render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">React is super</h1>
      </header>
      <p className="App-intro">{this.state.apiResponse}</p>
    </div>
)
  
}
}

export default App;
