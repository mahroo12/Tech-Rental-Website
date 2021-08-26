import React, {Component} from 'react';
import "./homePage.css";
import { Link} from "react-router-dom";

export default class Home extends Component {
   render(){
        return(
        
            <div style={{backgroundColor: 'white'}}>
              
              <div className= "the_text_pic_wrapper" style={{display: 'flex', justifyContent: 'space-between', padding: '25px', marginTop: '100px'}}>
                <div className="the_image" >
                <img src={require('../images/laptops.PNG').default} alt="laptops" height={350} width={600} style={{paddingLeft: '25px'}}></img>
                </div>

                <div className="the_text">
                    <div className= "text_part">
                    <h1 className= "test" style={{fontWeight: '800', fontSize: '50px'}}>Book your<br/> equipment now!</h1>
                    <br/>
                    <p>McGill students can now book the equipment of their choice<br/>
                     free of cost for non-commercialised purposes. You simply have<br/> 
                    to pick the the eqipment you want to rent, check its availabilities<br/> 
                    and pick the dates that work best for you.</p>
                    </div>

                    <div className= "the_buttons" style={{display: 'flex', justifyContent: 'flex-start', paddingBottom: '10px'}}>
                    
                        <div style={{padding: '20px'}}>
                            <Link to="/schedule" className="btn btn-primary" style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', border: 'none', backgroundColor: '#566AB1', padding: '10px 20px', fontWeight: 'bold'}}> Computers</Link>
                        </div>
                        <div style={{padding: '20px'}}>
                            <Link to="#" className="btn btn-primary" style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', border: 'none', color: '#566AB1', backgroundColor: '#FFFFFF40', padding: '10px 25px', fontWeight: 'bold', "&:hover": {cursor: "pointer", backgroundColor: "#ffff9b", color: "#fd0808"}}} >Others</Link>
                        </div>
                    </div>
                
                </div>
              </div>
              <div className="another_para" style={{textAlign: 'center', padding: '30px'}}>
                  <h2>Engineering Undergraduate Society Rentals</h2>
                  <p>Tech Rental is a part of Engineering Undergraduate Society, that enables engineering students to rent tech equipment <br/> such as laptops,
                    projectors, HDMI cables etc. 
                    You can book these equipment online through this website and collect the equipment <br/>from EUS office anytime from between 8 am to 5 pm. You may return the equiment
                    back to EUS office anytime during the<br/> before mentioned operating hours.</p>
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
            {/*
            <div style={{backgroundColor: '#566AB1', display: 'flex', justifyContent: 'space-between', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                
                
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
            </div>
            */}

            <div className="main_footer">
                <div className="footer_container">
                    {/*<div>
                    <img src={require('../images/eus_logo.png').default} height={50}></img>
                    </div>*/}
                    <div className="footer_row">
                    <div className="footer_column">
                            <h4>Contact Us</h4>
                            <ul className="navbar-nav mr-auto">
                                <li>vpcomm@mcgilleus.ca</li>
                                <li>vpcomm@mcgilleus.ca</li>
                            </ul>


                        </div>
                        <div className="footer_column">
                            <h4>Connect With Us</h4>
                            <ul className="navbar-nav mr-auto">
                                <li>Facebook</li>
                                <li>Instagram</li>
                            </ul>


                        </div>
                        <div className="footer_column">
                            <h4>About Us</h4>
                            <ul className="navbar-nav mr-auto">
                                <li>About EUS</li>
                                <li>About Tech Rentals</li>
                            </ul>


                        </div>

                    </div>
                
                </div>

            </div>
            </div>
            
        
    )}
}
