import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';



class Add extends Component {
  render() {
    return (
      <div className="container">
        <h1>ADD RECOLLECTIONS VIEW</h1>

        <Card className="formContainer">
          <CardContent>
          <form>
          <h3>Topic</h3>
          <input type="text" name="topic"/>

          <h3>Reflection</h3>
          <input type="text" name="reflection"/>

          <input type="submit"/>


          </form>
          </CardContent>


        </Card>

      </div>
    );
  }
}

export default Add;
