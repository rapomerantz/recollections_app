import React, { Component } from 'react';
import '../Reflections.css'
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button'; 

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
        <Card className="recollectionCard">
          <CardContent className="bookmarkedCard">
            <h3>{this.props.reflection.topic}</h3>
            {/* ToDo: fix this date so it looks pretty */}
            <h4>{this.props.reflection.date}</h4> 
            <p>{this.props.reflection.description}</p>
            <Button className="cardButton" onClick={this.handleDelete}>Delete Recolletion</Button>
            <Button className="cardButton" onClick={this.handleBookmark}>Bookmark Recollection</Button>
          </CardContent>
        </Card>
      )


    } else { cardContent = (
      <Card className="recollectionCard">
        <CardContent className="">
          <h3>{this.props.reflection.topic}</h3>
          {/* ToDo: fix this date so it looks pretty */}
          <h4>{this.props.reflection.date}</h4> 
          <p>{this.props.reflection.description}</p>
          <Button className="cardButton" onClick={this.handleDelete}>Delete Recolletion</Button>
          <Button className="cardButton" onClick={this.handleBookmark}>Bookmark Recollection</Button>
        </CardContent>
      </Card>
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
