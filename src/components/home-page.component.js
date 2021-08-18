import React, {Component} from 'react';
import "./homePage.css";
import { Link} from "react-router-dom";

export default class Home extends Component {
   render(){
        return(
        
            
               
                   <div className="home">
               <div>
               <Link to="/schedule" className="btn btn-primary" style={{marginLeft: '80px', marginTop: '220px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '13px', paddingBottom: '13px'}}> Computers</Link>
               </div>
               <div>
               <Link to="#" className="btn btn-primary" style={{marginLeft: '80px', marginTop: '20px'}}>others</Link>
               </div>
               </div>
            
        
    )}
}
