import React, { Component } from 'react';
import '../Reflections.css'
// import Button from 'material-ui/Button'; 
import { Panel, Button, Alert, FormGroup, FormControl, Glyphicon, ButtonGroup } from 'react-bootstrap';  
import moment from 'moment'

class ReflectionsCard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showAlert: false,
      editMode: false,
      editTopic: '',
      editDate: '',
      editDescription: '',
    };
  }

  toggleEdit = () => {
    console.log('toggling edit mode');
    this.setState({
      editMode: !this.state.editMode
    })    
  }


//functions handling showing & hiding the delete alert
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



  handlePut = (event) => {
    event.preventDefault(); 
    let id = this.props.reflection.id;
    let editTopic = this.state.editTopic;
    let editDescription = this.state.editDescription;
    console.log('put submit clicked');
    this.props.updateReflection(id, editTopic, editDescription)
    this.toggleEdit(); 

  }

  //change handlers for topic and description edits - could be shortened w/ a currying function later
  handleTopicEdit = event => {
    // console.log('event happended')
    this.setState({
        editTopic: event.target.value,
    });
    console.log(this.state.editTopic);
  }
  handleDescriptionEdit = event => {
    // console.log('event happended')
    this.setState({
        editDescription: event.target.value,
    });
    console.log(this.state.editDescription);
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

//BOOKMARKED
    if (this.props.reflection.bookmarked === true) {
      cardContent = (
        <Panel bsStyle="primary" className="recollectionCard">
          <Panel.Heading>
            <Panel.Title componentClass="h3"><strong>{this.props.reflection.topic}</strong></Panel.Title>
          </Panel.Heading>
          <Panel.Body> 
            <p>{moment(this.props.reflection.date).format("MMMM Do YYYY")}</p> 
            <p>{this.props.reflection.description}</p>
            <ButtonGroup>
              <Button className="cardButton" onClick={this.handleShow}><Glyphicon glyph="trash" /></Button>
              <Button className="cardButton" onClick={this.handleBookmark}><Glyphicon glyph="bookmark" /></Button>
              <Button className="cardButton" onClick={this.toggleEdit}><Glyphicon glyph="pencil" /></Button>
            </ButtonGroup>
          </Panel.Body>
            {/* Alert triggered on delete */}
            {alertCard}

        </Panel>
      )}

//EDIT MODE
    else if (this.state.editMode === true) { 
      cardContent = (
        <Panel bsStyle="warning" className="recollectionCard">
          <Panel.Heading>
            <Panel.Title componentClass="h3"><strong>{this.props.reflection.topic}</strong></Panel.Title>
          </Panel.Heading>
          <Panel.Body> 
            <p>{moment(this.props.reflection.date).format("MMMM Do YYYY")}</p> 
            <p>{this.props.reflection.description}</p>
            <ButtonGroup>
              <Button className="cardButton" onClick={this.handleShow}><Glyphicon glyph="trash" /></Button>
              <Button className="cardButton" onClick={this.handleBookmark}><Glyphicon glyph="bookmark" /></Button>
              <Button className="cardButton" onClick={this.toggleEdit}><Glyphicon glyph="pencil" /></Button>
            </ButtonGroup>
            {/* Alert triggered on delete */}
            {alertCard} 

            <form onSubmit={this.handlePut}>
                <FormGroup controlId="formBasicText">
                  {/* topic */}
                    <FormControl
                        type="text"
                        onChange={this.handleTopicEdit}
                        placeholder={this.props.reflection.topic}
                        />
                    {/* description */}
                    <FormControl
                        type="text"
                        onChange={this.handleDescriptionEdit}
                        placeholder={this.props.reflection.description}
                        />
                </FormGroup>

                <Button type="submit">Submit</Button>

            </form>
          </Panel.Body>
        </Panel>
    )}

//NORMAL
    else { 
      cardContent = (
        <Panel className="recollectionCard">
          <Panel.Heading>
            <Panel.Title componentClass="h3"><strong>{this.props.reflection.topic}</strong></Panel.Title>
          </Panel.Heading>
          <Panel.Body> 
            <p>{moment(this.props.reflection.date).format("MMMM Do YYYY")}</p> 
            <p>{this.props.reflection.description}</p>
            <ButtonGroup>
              <Button className="cardButton" onClick={this.handleShow}><Glyphicon glyph="trash" /></Button>
              <Button className="cardButton" onClick={this.handleBookmark}><Glyphicon glyph="bookmark" /></Button>
              <Button className="cardButton" onClick={this.toggleEdit}><Glyphicon glyph="pencil" /></Button>
            </ButtonGroup>

          </Panel.Body>
            {/* Alert triggered on delete */}
            {alertCard} 

        </Panel>
    )}


    return (
      <div className="">

        {cardContent}

      </div>
    );
  }
}

export default ReflectionsCard;
