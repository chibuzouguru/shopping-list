import React, { Component } from 'react';
import Items from './Items';
import './Normalize.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <section className="App">
        <Items />
      </section>
    );
  }
}

export default App;
