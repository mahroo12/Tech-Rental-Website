import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <div>
      
      <nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg"  style= {{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        
        
        <Link to="/" className="navbar-brand" style={{paddingLeft: '10px'}}>EUS</Link>
        {/*<img className="navbar-brand" src={require('../images/eus_logo.png').default} height={60} style={{paddingLeft: '10px'}} ></img>*/}
        <div className="collpase navbar-collapse" style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '20px'}}>
          <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">About</Link>
            </li>
            
            <li className="navbar-item">
            <Link to="/" className="nav-link">Contact</Link>
            </li>
            <li className="navbar-item">
            <Link to="/" className="nav-link">Admin Portal</Link>
            </li>
          </ul>
        </div>
        
      </nav>
      
      
      
      
      </div>
      
    );
  }
}