import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">EUS</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/student" className="nav-link">Create Student</Link>
          </li>
          <li className="navbar-item">
          <Link to="/schedule" className="nav-link">Schedule</Link>
          </li>
          <li className="navbar-item">
          <Link to="/calendar" className="nav-link">Calendar</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}