import React, { Component } from 'react';
import axios from 'axios';
import AddForm from './AddForm/AddForm.js'




class Add extends Component {
  render() {
    return (
      <div className="container">
        <h1>ADD RECOLLECTIONS VIEW</h1>

        <AddForm />
        
      </div>
    );
  }
}

export default Add;
