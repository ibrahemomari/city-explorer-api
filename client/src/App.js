import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import City from './City'
import Weather from './Weather';
class App extends Component {
  render() {
    return (
      <div>
        <City/>
        <Weather/>
      </div>
    )
  }
}

export default App
