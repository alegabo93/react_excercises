import React, {Component} from 'react';

class Hello extends Component {
  render() {
    var people = 'World';
    return (
      <h1>Hello {people}</h1>
    );
  }
}

React.render(<Hello />, document.getElementById('root'));
