import React, { Component } from 'react';
import '../Reflections.css'
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button'; 

class ReflectionsCard extends Component {
  render() {
    return (
      <div className="">
        <Card className="recollectionCard">
          <CardContent>
            <h3>{this.props.reflection.topic}</h3>

            {/* ToDo: fix this date so it looks pretty */}
            
            <h4>{this.props.reflection.date}</h4> 
            <p>{this.props.reflection.description}</p>
            <Button className="cardButton">Delete Recolletion</Button>
            <Button className="cardButton">Bookmark Recollection</Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ReflectionsCard;
