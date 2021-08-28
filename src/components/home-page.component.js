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
                                <li>techrental@mcgilleus.ca</li>
                            </ul>


                        </div>
                        <div className="footer_column">
                            <h4>Connect With Us</h4>
                            <ul className="navbar-nav mr-auto">
                                <Link to={{ pathname: "https://www.facebook.com/mcgilleus/" }} target="_blank" style={{ textDecoration: 'none', color: 'white' }} >Facebook</Link>
                            
                                <Link to={{ pathname: "https://www.instagram.com/mcgilleus/?hl=en" }} target="_blank" style={{ textDecoration: 'none', color: 'white' }} >Instagram</Link>
                            </ul>


                        </div>
                        <div className="footer_column">
                            <h4>About Us</h4>
                            <ul className="navbar-nav mr-auto">
                            <Link to={{ pathname: "https://eus.wiki/Launchpad" }} target="_blank" style={{ textDecoration: 'none', color: 'white' }} >About EUS</Link>
                                <Link to={{ pathname: "/about" }} target="_blank" style={{ textDecoration: 'none', color: 'white' }} >About Tech Rentals</Link>
                            </ul>


                        </div>

                    </div>
                
                </div>

            </div>
            </div>
            
        
    )}
}
