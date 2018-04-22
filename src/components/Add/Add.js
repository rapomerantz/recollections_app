import React, { Component } from 'react';
import axios from 'axios';
import AddForm from './AddForm/AddForm.js'




class Add extends Component {
  render() {
    return (
      <div className="container">

        <AddForm />
        
      </div>
    );
  }
}

export default Add;
