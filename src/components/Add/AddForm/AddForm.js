import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup, FormControl, Button, Panel, Alert } from 'react-bootstrap';
import '../Add.css'




class AddForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topic: '',
            description: '',
            open: false,
            showAlert: false,
            showSuccess: false,

        }
    }

//change handlers for topic and description - could be shortened w/ a currying function later
    handleTopicChange = event => {
        // console.log('event happended')
        this.setState({
                topic: event.target.value,
        });
        console.log(this.state.topic);
    }
    handleDescriptionChange = event => {
        // console.log('event happended')
        this.setState({
                description: event.target.value,
        });
        console.log(this.state.description);
    }

//axios POST to /api/reflections
    postReflection = (event) => {
        event.preventDefault(); 
        //if no infor added, showAlert warning
        if (this.state.topic.length < 1 || this.state.description.length < 1) {
            this.handleShow(); 

        } else {
            console.log('in POST /api/reflections');
            axios.post('/api/reflections', this.state)
            .then((response) => {
                console.log('successful POST /api/reflections');
                this.setState({
                    topic: '',
                    description: '',
                    open: true,
                    showSuccess: true,  //show alertSuccess
                })
            })
            .catch((error) => {
                console.log('error in POST /api/reflections');
            })
        }
    }
    
//functions handling showing & hiding alerts
  handleDismiss = () => {
    this.setState({ showAlert: false, showSuccess: false });
  }
  handleShow = () => {
    this.setState({ showAlert: !this.state.showAlert });
  }



  render() {

// This alert is triggered if the user doesn't enter info before submit
    let alertCard;
    if (this.state.showAlert) {
    alertCard = (
        <Alert bsStyle="warning" onDismiss={this.handleDismiss}>
            <p><strong>Something's wrong...check your inputs</strong></p>
        </Alert>
    )}
//This alert is triggered by a successful POST
    else if (this.state.showSuccess) {
        alertCard = (
            <Alert bsStyle="success" onDismiss={this.handleDismiss}>
                <p><strong>Reflection added</strong></p>
            </Alert>
        )}



//RENDER RETURN        
    return (
        <div>
      <Panel className="addPanel">
            <h2><i>Add a New Reflection</i></h2>

        <form onSubmit={this.postReflection}>
            <FormGroup bsSize="large" controlId="formBasicText">
                <FormControl
                    className="input"
                    type="text"
                    value={this.state.topic}
                    onChange={this.handleTopicChange}
                    placeholder="Topic?"
                    />
                <FormControl
                    className="input"
                    type="text"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                    placeholder="What did you learn?"
                    />
            </FormGroup>

        {alertCard}
            <Button type="submit">Submit</Button>

        </form>


      </Panel>
        </div>




    );
  }
}

export default AddForm;
