import React, {Component} from 'react';
import "./createAbout.css";

export default class CreateAbout extends Component {
   render(){
        return(
        <div>
            <div className= "about" style={{paddingTop: '120px', paddingLeft: '40px', paddingRight: '40px'}}>
                <h1>About Tech Rental</h1>
                <p className="about-para" style={{paddingTop:'30px', fontSize: '25px'}}>Tech Rental is one of the services provided by EUS, where you can rent
                    equipment free of charge.
                </p>
                <p className="about-para" style={{fontSize: '25px'}}>Your laptop crashed, the night before final project presentation? Need HDMI cables 
                    for that important presentation? Do not worry because we've got you covered!
                </p>
                <p className="about-para" style={{fontSize: '25px'}}>You can read the descriptions and view images of the equipment you would be interested in renting
                    and check the availability of that equipment from our Calendar. If the date that you are looking to rent 
                    for is available then you can book that equipment. If you book the equipment for a date that is already 
                    taken then your booking will get cancelled. 
                </p>

                <p style={{fontSize: '25px'}}>You can pick up your equipment that you have booked, anytime between 8 am to 
                    5pm throughout the duration of your booking from the EUS office in McConnel 
                    Engineering Building. You must return the equiment to the EUS office by 5pm of the last day of 
                    your booking.
                </p>
                <br/>
                <br/>
            </div>
        </div>
    )}
}
