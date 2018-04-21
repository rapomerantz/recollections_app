import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';




class AddForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topic: '',
            description: ''

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
        event.preventDefault(); //stop refresh
        console.log('in POST /api/reflections');
        axios.post('/api/reflections', this.state)
        .then((response) => {
            console.log('successful POST /api/reflections');
        })
        .catch((error) => {
            console.log('error in POST /api/reflections');
        })
    }


  render() {
    return (
      <div className="container">
        
        <form onSubmit={this.postReflection}>
            <FormGroup controlId="formBasicText">
                <FormControl
                    type="text"
                    value={this.state.topic}
                    onChange={this.handleTopicChange}
                    placeholder="Topic?"
                />
                <FormControl
                    type="text"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                    placeholder="What did you learn?"
                />
            </FormGroup>

            <Button type="submit">Submit</Button>

        </form>
      </div>
    );
  }
}

export default AddForm;
