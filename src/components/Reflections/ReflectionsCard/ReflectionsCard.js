import React, { Component } from 'react';
import '../Reflections.css'
// import Button from 'material-ui/Button'; 
import { Panel, Button, Modal, Alert } from 'react-bootstrap';  
import moment from 'moment'

class ReflectionsCard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showAlert: false
    };
  }

  handleDismiss = () => {
    this.setState({ showAlert: false });
  }

  handleShow = () => {
    this.setState({ showAlert: !this.state.showAlert });
  }




  handleDelete= () => {
    this.props.deleteReflection(this.props.reflection.id); 
  }


  handleBookmark = () => {
    this.props.updateBookmark(this.props.reflection.id);   
  }

  render() {


// This alert is triggered when the user tries to delete a reflection
    let alertCard;
    if (this.state.showAlert) {
      alertCard = (
        <Alert bsStyle="danger" onDismiss={this.handleDismiss} className="recollectionCard">
          <p>
          <strong>Are you sure you want to delete this entry? </strong>
          </p>
            <Button bsStyle="danger" onClick={this.handleDelete}>Delete</Button>
            <Button onClick={this.handleDismiss}>Nevermind</Button>
          <p>
          </p>
        </Alert>
      );
    }


// I can probably think of a better way to toggle bookmarked class  

    let cardContent; 
    if (this.props.reflection.bookmarked === true) {
      cardContent = (
        <Panel bsStyle="primary" className="recollectionCard">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{this.props.reflection.topic}</Panel.Title>
          </Panel.Heading>
          <Panel.Body> 
            <p>{moment(this.props.reflection.date).format("MMMM Do YYYY")}</p> 
            <p>{this.props.reflection.description}</p>
            <Button className="cardButton" onClick={this.handleShow}>Delete Recolletion</Button>
            <Button className="cardButton" onClick={this.handleBookmark}>Bookmark Recollection</Button>
          </Panel.Body>
            {/* Alert triggered on delete */}
            {alertCard}

        </Panel>
      )


    } else { 
      cardContent = (
        <Panel className="recollectionCard">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{this.props.reflection.topic}</Panel.Title>
          </Panel.Heading>
          <Panel.Body> 
            <p>{moment(this.props.reflection.date).format("MMMM Do YYYY")}</p> 
            <p>{this.props.reflection.description}</p>
            <Button className="cardButton" onClick={this.handleShow}>Delete Recolletion</Button>
            <Button className="cardButton" onClick={this.handleBookmark}>Bookmark Recollection</Button>
          </Panel.Body>
            {/* Alert triggered on delete */}
            {alertCard} 

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
