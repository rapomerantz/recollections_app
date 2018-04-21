import React, { Component } from 'react';
import '../Reflections.css'
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button'; 

class ReflectionsCard extends Component {

  handleDelete= () => {
    console.log('in handleDelete', this.props.reflection.id);
    this.props.deleteReflection(this.props.reflection.id); 
  }


  render() {
    return (
      <div className="">
        <Card className="recollectionCard">
          <CardContent>
            <h3>{this.props.reflection.topic}</h3>

            {/* ToDo: fix this date so it looks pretty */}
            
            <h4>{this.props.reflection.date}</h4> 
            <p>{this.props.reflection.description}</p>
            <Button className="cardButton" onClick={this.handleDelete}>Delete Recolletion</Button>
            <Button className="cardButton">Bookmark Recollection</Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ReflectionsCard;
