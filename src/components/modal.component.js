import React, {Component} from 'react';
import "./modal.component.css";


export default class Modal extends Component {
   render(){
        return(
        <div className= "modalBackground">
            <div className= "modalContainer">
            
                <div className= "title">
                    <h3 className= "description">Chromebook</h3>
                    </div>
                <div className= "body">
                <img src={require('../images/chromebook.PNG').default} alt="chromebook" height={200}></img>
                </div>
                <div>
                    <p className= "description"style={{fontWeight: 'bold', paddingLeft: '25px'}}>Chrome OS. Classroom ready toughness. Upto 11 <br/>hours of battery life. Optional built-in stylus.</p>
                    </div>
                <div className= "footer">
                    <button style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', backgroundColor: '#566AB1'}} onClick = {this.props.hide_Modal}>Go back to list</button>
                    
                </div>
            </div>
        </div>
    )}
}

//export default Modal