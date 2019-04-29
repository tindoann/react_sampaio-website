import React, { Component } from 'react'; 

class Navigation extends Component {
  render() {
  const section = ['Home', 'About', 'Service', 'Portfolio', 'Contact' ]; 
  const navLinks = section.map( (section)
    return (
        <nav>
            <h2 className='logo'>{this.props.logoTitle}</h2>
            <ul>
            </ul>
        </nav>
    ); 
  }
}

export default Navigation; 