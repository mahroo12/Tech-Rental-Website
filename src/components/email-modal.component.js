import React, {Component} from 'react';

import axios from 'axios';

export default class EmailModal extends Component {
    constructor(props) {
        super(props);
    
        
        this.onChangeTypedEmail = this.onChangeTypedEmail.bind(this);
    
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          typedEmail: '',    
        }
      }
    
    
      onChangeTypedEmail(e) {
        this.setState({
          typedEmail: e.target.value
        });
      }

      onSubmit(e) {
        e.preventDefault();
      
    
        const event_id_to_be_deleted = this.props.data.theEventID;
        const prev_email= this.props.data.theEventEmail;
        const new_email = this.state.typedEmail;
        if (new_email === prev_email){
            axios.delete('http://localhost:5000/students/'+ event_id_to_be_deleted)
            .then(response => { console.log(response.data)});
            window.location.reload();
          }
          else{
            alert("wrong email. Try again");
          }
          
    
      }
   render(){
        return(
        <div className= "email_modalBackground" style= {{top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', position: 'fixed', zIndex: '1000'}}>
            <div className= "email_modalContainer" style= {{padding: '40px', margin: '100px', width: '500px', height: '400px', backgroundColor: 'white', borderRadius: '10px', textAlign: 'center', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            
                <div className= "email_title">
                    <h2 className= "email_description">Remove Event</h2>
                </div>
                <div className= "email_body" style={{padding: '40px'}}>
                <p> Please, Provide the email address below with which you booked the computer to remove the booking.</p>
                </div>
                <div className= "footer" >
                    <form onSubmit= {this.onSubmit}> 
                    <div style={{paddingLeft: '70px'}}>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.typedEmail}
                            onChange={this.onChangeTypedEmail}
                            
                  />
                  </div>
                  <div style={{padding: '25px', display: 'flex', justifyContent: 'space-between', textAlign: 'center'}}>
                  <input style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',backgroundColor: '#545B9E'}} type="submit" value="Continue" className="btn btn-primary" />
                  <button style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',borderRadius: '5px', border: 'none', backgroundColor: '#545B9E', color: 'white'}}  onClick = {this.props.hide_Modal}>Cancel</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )}
}
