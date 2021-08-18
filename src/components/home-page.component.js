import React, {Component} from 'react';
import "./homePage.css";
import { Link} from "react-router-dom";

export default class Home extends Component {
   render(){
        return(
        
            <div>
               
            <div className="home">
               <div>
                <Link to="/schedule" className="btn btn-primary" style={{border: 'none', backgroundColor: '#566AB1', marginLeft: '80px', marginTop: '220px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '13px', paddingBottom: '13px'}}> Computers</Link>
               </div>
               <div>
                <Link to="#" className="btn btn-primary" style={{border: 'none', color: '#566AB1', backgroundColor: '#FFFFFF40',marginLeft: '80px', marginTop: '20px'}}>Others</Link>
               </div>
            </div>

            <footer style={{backgroundColor: '#566AB1', display: 'flex', justifyContent: 'space-between'}}>
                
                
                        <Link to="/" className="nav-link" style={{color: 'white'}}>vpcomm@mcgilleus.ca</Link>
                
                
                <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '20px'}}>
                <ul className="navbar-nav mr-auto" style={{paddingRight: '20px'}}>
                    <li >
                        <Link to="/" className="nav-link" style={{color: 'white'}}>fb</Link>
                    </li>
                </ul>
                
                <ul className="navbar-nav mr-auto">
                    <li >
                        <Link to="/" className="nav-link" style={{color: 'white'}}>insta</Link>
                    </li>
                </ul>
                </div>
            </footer>
            </div>
            
        
    )}
}
