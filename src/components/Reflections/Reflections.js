import React, { Component } from 'react';
import axios from 'axios';
import './Reflections.css'
// import Card, { CardContent } from 'material-ui/Card';
// import Button from 'material-ui/Button'; 
import ReflectionsCard from './ReflectionsCard/ReflectionsCard'

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

//axios PUT
  updateBookmark = (id) => {
    axios.put('/api/reflections/' + id)
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
      return <ReflectionsCard key={reflection.id}
                              reflection={reflection}
                              deleteReflection={this.deleteReflection}
                              updateBookmark={this.updateBookmark}/>
    })


    return (
      <div className="container">
        
        {reflectionsArray}

      </div>
    );
  }
}

export default Reflections;
