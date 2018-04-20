import React, { Component } from 'react';
import axios from 'axios';
import './Recollections.css'
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button'; 

class Recollections extends Component {
  render() {
    return (
      <div className="container">
        <h1>RECOLLECTIONS VIEW</h1>
        <Card className="recollectionCard">
          <CardContent>
            <h3>I'm a recollection</h3>
            <h4>Date of recollection goes here</h4>
            <p>Subcontent of recollection goes here</p>
            <Button className="cardButton">Delete Recolletion</Button>
            <Button className="cardButton">Bookmark Recollection</Button>
          </CardContent>
        </Card>
        <Card className="recollectionCard">
          <CardContent>
            <h3>I'm a recollection</h3>
            <h4>Date of recollection goes here</h4>
            <p>Subcontent of recollection goes here</p>
            <Button className="cardButton">Delete Recolletion</Button>
            <Button className="cardButton">Bookmark Recollection</Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Recollections;
