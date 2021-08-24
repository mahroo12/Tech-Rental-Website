import React, {Component} from 'react';
import "./homePage.css";
import { Link} from "react-router-dom";

export default class Home extends Component {
   render(){
        return(
        
            <div style={{backgroundColor: 'white'}}>
              
              <div className= "the_text_pic_wrapper" style={{display: 'flex', justifyContent: 'space-between', padding: '25px', marginTop: '100px'}}>
                <div className="the_image" >
                <h1>hello </h1>
                </div>

                <div className="the_text">
                    <div className= "text_part">
                    <h1>Software for <br/> Nonprofits</h1>
                    <br/>
                    <p>We are a team of McGill students who create robust software <br/>
                     for social good. We believe that our engineering skill sets do not<br/> 
                    render us useless in addressing social injustices. Instead, they empower<br/> 
                    us to build a better society together.</p>
                    </div>

                    <div className= "the_buttons" style={{display: 'flex', justifyContent: 'flex-start', paddingBottom: '10px'}}>
                    
                        <div style={{padding: '10px'}}>
                            <Link to="/schedule" className="btn btn-primary" style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', border: 'none', backgroundColor: '#566AB1'}}> Computers</Link>
                        </div>
                        <div style={{padding: '10px'}}>
                            <Link to="#" className="btn btn-primary" style={{border: 'none',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', color: '#566AB1', backgroundColor: '#FFFFFF40'}}>Others</Link>
                        </div>
                    </div>
                
                </div>
              </div>
              <div className="another_para" style={{textAlign: 'center', padding: '30px'}}>
                  <h2>We believe in using tech for good.</h2>
                  <p>Each semester, we work with one or more non-profits with the opportunity to build a great product that solves a core <br/> need. 
                    We work in small groups led by a product manager to scope and develop the application, taking into account our clients’ <br/>
                    requirements and suggestions.</p>
              </div>
              <div className="another_para" style={{textAlign: 'center', padding: '30px'}}>
                  <h2>We believe in using tech for good.</h2>
                  <p>Each semester, we work with one or more non-profits with the opportunity to build a great product that solves a core <br/> need. 
                    We work in small groups led by a product manager to scope and develop the application, taking into account our clients’ <br/>
                    requirements and suggestions.</p>
              </div>
            {/*
            <div className="home">
               <div>
                <Link to="/schedule" className="btn btn-primary" style={{border: 'none', backgroundColor: '#566AB1', marginLeft: '80px', marginTop: '220px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '13px', paddingBottom: '13px'}}> Computers</Link>
               </div>
               <div>
                <Link to="#" className="btn btn-primary" style={{border: 'none', color: '#566AB1', backgroundColor: '#FFFFFF40',marginLeft: '80px', marginTop: '20px'}}>Others</Link>
               </div>
            </div>
            */}

            <footer style={{backgroundColor: '#566AB1', display: 'flex', justifyContent: 'space-between', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                
                
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
