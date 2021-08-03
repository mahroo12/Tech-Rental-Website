import React, {Component} from 'react';
import "./modal.component.css";


export default class Modal extends Component {
   render(){
        return(
        <div className= "modalBackground">
            <div className= "modalContainer">
                <div className= "title">
                    <h1>Are you sure you want to continue?</h1>
                    </div>
                <div className= "body">
                    <p>the next page is awesome </p>
                </div>
                <div className= "footer">
                    <button>Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )}
}

//export default Modal