import React, { Component } from 'react';
import '../Reflections.css'
// import Button from 'material-ui/Button'; 
import { Panel, Button } from 'react-bootstrap';  

class ReflectionsCard extends Component {


  handleDelete= () => {
    this.props.deleteReflection(this.props.reflection.id); 
  }


  handleBookmark = () => {
    this.props.updateBookmark(this.props.reflection.id);   
  }


  render() {


// I can probably think of a better way to toggle bookmarked class  

    let cardContent; 
    if (this.props.reflection.bookmarked === true) {
      cardContent = (
        <Panel bsStyle="primary" className="recollectionCard bookmarkedCard">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{this.props.reflection.topic}</Panel.Title>
          </Panel.Heading>
          <Panel.Body> 
            {/* ToDo: fix this date so it looks pretty */}
            <h4>{this.props.reflection.date}</h4> 
            <p>{this.props.reflection.description}</p>
            <Button className="cardButton" onClick={this.handleDelete}>Delete Recolletion</Button>
            <Button className="cardButton" onClick={this.handleBookmark}>Bookmark Recollection</Button>
          </Panel.Body>
        </Panel>
      )


    } else { 
      cardContent = (
        <Panel bsStyle="primary" className="recollectionCard">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{this.props.reflection.topic}</Panel.Title>
          </Panel.Heading>
          <Panel.Body> 
            {/* ToDo: fix this date so it looks pretty */}
            <h4>{this.props.reflection.date}</h4> 
            <p>{this.props.reflection.description}</p>
            <Button className="cardButton" onClick={this.handleDelete}>Delete Recolletion</Button>
            <Button className="cardButton" onClick={this.handleBookmark}>Bookmark Recollection</Button>
          </Panel.Body>
        </Panel>
    )
    }

    return (
      <div className="">

        {cardContent}

      </div>
    );
  }
}

export default ReflectionsCard;
