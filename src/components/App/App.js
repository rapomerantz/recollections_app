import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Add from '../Add/Add.js'
import Reflections from '../Reflections/Reflections'

// import Navbar from '../Nav/CustomNavbar.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Oh, the places you've been</h1>
          <h4><i>Reflection Board</i></h4>
        </header>

        <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">View Reflections</Link>
                  </li>
                  <li>
                    <Link to="/add">Add</Link>
                  </li>
                </ul>
              </nav>

              <Route path="/add" component={Add}/>
              <Route exact path="/" component={Reflections}/>
            </div>
          </Router>

      </div>
    );
  }
}

export default App;
