import React, { Component } from 'react';
import '../Reflections.css'
// import Button from 'material-ui/Button'; 
import { Panel, Button, Modal } from 'react-bootstrap';  
import moment from 'moment'

class ReflectionsCard extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      showModal: false
    }
  }


  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleShowModal = () => {
    console.log('clicked show modal');
    this.setState({
      showModal: true
    })
    console.log(this.state.showModal);
    
  }


  handleDelete= () => {
    this.props.deleteReflection(this.props.reflection.id); 
  }


  handleBookmark = () => {
    this.props.updateBookmark(this.props.reflection.id);   
  }

  render() {


    <Modal show={this.state.showModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Here's the body baby
          </Modal.Body>
    </Modal>


// I can probably think of a better way to toggle bookmarked class  

    let cardContent; 
    if (this.props.reflection.bookmarked === true) {
      cardContent = (
        <Panel bsStyle="primary" className="recollectionCard">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{this.props.reflection.topic}</Panel.Title>
          </Panel.Heading>
          <Panel.Body> 
            {/* ToDo: fix this date so it looks pretty */}
            <p>{moment(this.props.reflection.date).format("MMMM Do YYYY")}</p> 
            <p>{this.props.reflection.description}</p>
            <Button className="cardButton" onClick={this.handleDelete}>Delete Recolletion</Button>
            <Button className="cardButton" onClick={this.handleBookmark}>Bookmark Recollection</Button>
          </Panel.Body>
        </Panel>
      )


    } else { 
      cardContent = (
        <Panel className="recollectionCard">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{this.props.reflection.topic}</Panel.Title>
          </Panel.Heading>
          <Panel.Body> 
            {/* ToDo: fix this date so it looks pretty */}
            <p>{moment(this.props.reflection.date).format("MMMM Do YYYY")}</p> 
            <p>{this.props.reflection.description}</p>
            <Button className="cardButton" onClick={this.handleShowModal}>Delete Recolletion</Button>
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
