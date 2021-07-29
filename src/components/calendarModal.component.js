import React, {Component} from 'react';
import { Link} from "react-router-dom";

export default class CalendarModal extends Component {
   render(){
        return(
        <div>
            <div className= "modalContainer">
                <div className= "title">
                    <h1>Are you ready to book?</h1>
                </div>
                <div className= "body">
                    <p>Click yes to confirm booking for {this.props.data.theDate}! </p>
                </div>
                <div className= "footer">
                    <Link to="/schedule" className="btn btn-primary">Book</Link>
                    <Link to= {{pathname: "/student", params: this.props.data.theDate }} className="btn btn-primary">Continue</Link>
                    
                </div>
            </div>
        </div>
    )}
}
