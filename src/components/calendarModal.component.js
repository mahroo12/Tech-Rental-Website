import React, {Component} from 'react';
import { Link} from "react-router-dom";

export default class CalendarModal extends Component {
   render(){
        return(
        
            <div className= "anotherModalContainer" style= {{top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', position: 'fixed', zIndex: '1000'}}>
                <div className= "anotherMtitle" style= {{padding: '40px', margin: '100px', width: '500px', height: '400px', backgroundColor: 'white', borderRadius: '10px', textAlign: 'center', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                    <div >   
                        <h1>Are you ready to book?</h1>
                    </div>
                
                    <div className= "anotherMbody" style={{padding: '40px'}}>
                        <p>Click yes to confirm booking for {this.props.data.theDate}! </p>
                    </div>
                
                    <div className= "anotherMfooter" style={{padding: '40px', display: 'flex', justifyContent: 'space-between', textAlign: 'center'}}>
                        <Link to="/schedule" className="btn btn-primary">Book</Link>
                        <Link to= {{pathname: "/student", params: this.props.data.theDate, param2: this.props.data.theEndDate}} className="btn btn-primary">Continue</Link>
                    
                    </div>
                </div>
            </div>
        
    )}
}
