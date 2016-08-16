import React, { Component, PropTypes } from 'react';
import CheckList from '../CheckList/CheckList';
import marked from 'marked';

class Card extends Component {
  constructor() {
      super();
      this.state = {
        showDetails: false
      };
  }

  toggleDetails(){
    this.setState({showDetails: !this.state.showDetails});
  }

  render() {
    let cardDetails;
    let sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    }

    if(this.state.showDetails){
      cardDetails = (
        <div className="card__details">
          <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      );
    }
    return (
      <div className="card">
        <div style={sideColor}/>
        <div className={
          this.state.showDetails ? "card__title card__title--is-open" : "card__title"
        } onClick={this.toggleDetails.bind(this)}>
          {this.props.title}
        </div>
        {cardDetails}
      </div> );
  }
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object)
};

export default Card;
