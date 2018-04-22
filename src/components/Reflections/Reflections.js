import React, { Component } from 'react';
import axios from 'axios';
import './Reflections.css'
// import Card, { CardContent } from 'material-ui/Card';
// import Button from 'material-ui/Button'; 
import ReflectionsCard from './ReflectionsCard/ReflectionsCard'
import { Grid, Row, Col } from 'react-bootstrap'

class Reflections extends Component {
  constructor(props) {
    super(props) 

    this.state = ({
      reflections: []
    })
  }


//axios GET for reflections from db
  getReflections = () => {
    axios.get('/api/reflections')
    .then((response) => {
      this.setState({
        reflections: response.data
      })
    })
    .catch((error) => {
      console.log('error in GET /api/reflections', error);
    })
  }

//axios DELETE
  deleteReflection = (id) => {
    axios.delete('/api/reflections/' + id)
    .then((response) => {
      this.getReflections(); 
    })
    .catch((error) => {
      console.log('error in DELETE /api/reflections', error);
    })
    
  }

//axios PUT for bookmark
  updateBookmark = (id) => {
    axios.put('/api/reflections/' + id)
    .then((response) => {
      this.getReflections(); 
    })
    .catch((error) => {
      console.log('error in PUT /api/reflections', error);
    })
  }

//axios PUT for reflection
  updateReflection = (id, editTopic, editDescription) => {
    console.log('reached updateReflection', id, editTopic, editDescription);
    let editObject = {'editTopic': editTopic, 'editDescription': editDescription}
    axios.put('/api/reflections/edit/' + id, editObject)
    .then((response) => {
      this.getReflections(); 
    })
    .catch((error) => {
      console.log('error in PUT /api/reflections', error);
    })
  }


  componentDidMount() {
    this.getReflections();
  }

  render() {

    let reflectionsArray = this.state.reflections.map((reflection) => {
      return(<Col xs={11} md={6}>
              <ReflectionsCard key={reflection.id}
                                      reflection={reflection}
                                      deleteReflection={this.deleteReflection}
                                      updateBookmark={this.updateBookmark}
                                      updateReflection={this.updateReflection}/>
            </Col>
            )
    })


    return (

      <Grid className="container">
        <Row>
          
          {reflectionsArray}
          
        </Row>
      </Grid>
    );
  }
}

export default Reflections;
