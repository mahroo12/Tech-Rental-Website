//import React from "react";
import React, {Component} from 'react';

import axios from 'axios';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import momentPlugin from '@fullcalendar/moment'
import interactionPlugin from "@fullcalendar/interaction";
import CalendarModal from "./calendarModal.component";
import EmailModal from "./email-modal.component";
import moment from 'moment';


export default class CreateCalendar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      email_modal_show: false,
      theDate: null,
      theEndDate: null,
      theColor: null,
      theEventEmail: null,
      theEventID: null,
      weekendsVisible: true,
      currentEvents: []
      
    };
    //this.showModal = this.showModal.bind(this);
   this.hide_form_Modal = this.hide_form_Modal.bind(this);
   // this.displayEventInfo = this.displayEventInfo.bind(this);
    this.getTheEmail = this.getTheEmail.bind(this);
    this.hide_Modal = this.hide_Modal.bind(this);
    //this.showEmailModal = this.showEmailModal(this);


  }
 
  
  componentDidMount() {
      axios.get('http://localhost:5000/students/')
        .then(response =>  this.setState({currentEvents: response.data}));

        console.log(this.state.currentEvents);
        
        
        
  }
  

  render() {
    return (
      
        <section style={{ backgroundColor: 	'#FFFFFF', paddingTop: '100px'}}>
          <p style={{paddingLeft: '25px'}}>Please, do not refresh at any point of booking otherwise information will be lost.</p>
          <div className="cl" style={{padding: '20px', position: 'relative', zIndex: 0}}>
              {console.log('the value is')}
              {console.log(this.state.currentEvents)} 
         
              <FullCalendar
          
                plugins={[dayGridPlugin, interactionPlugin, momentPlugin]}
                headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth"
                }}
            
                initialView="dayGridMonth"
                editable={false}
                selectable={true}
                selectOverlap={true}
                
                events= {this.state.currentEvents}
                eventClick= {this.allEmailFunction}//this.displayEventInfo}
                selectConstraint={{start: '2021-08-04'}}
                eventDurationEditable={false}
                defaultAllDay= {false}
                weekends={this.state.weekendsVisible}
                select=  {this.anotherf}
            
              />
          </div>
          
              {this.state.show && <CalendarModal hide_form_Modal = {this.hide_form_Modal} data={this.state}/>};
              {this.state.email_modal_show && <EmailModal hide_Modal = {this.hide_Modal} data={this.state}/>}
        </section>
    );
  }

  showModal = () => {
    this.setState({ 
      show: true 
    });
  };

  hide_form_Modal = () => {
    this.setState({ show: false });
  };
  hide_Modal = () => {
    this.setState({ email_modal_show: false });
  };

  getTheDate = (selectInfo) =>{
    this.setState({
      theDate: moment(selectInfo.startStr).set({hour:23}).format(), 
      theEndDate: selectInfo.endStr,
      theColor: this.props.location.color_attribute
    });
  };
/*
  displayEventInfo = (selectInfo) =>{
    alert(selectInfo.event.extendedProps._id);
    const event_id_to_be_deleted = selectInfo.event.extendedProps._id;
    const event_email = selectInfo.event.extendedProps.studentemail;
    const email_address =prompt("what is the email address?");
    //alert(email_address);
    if (event_email === email_address){
      axios.delete('http://localhost:5000/students/'+ event_id_to_be_deleted)
      .then(response => { console.log(response.data)});
      window.location.reload();
    }
    else{
      alert("wrong email. Try again");
    }
  }; */

  helperfunction = (selectInfo) =>{

    //const d = moment(selectInfo.startStr);
    //const ad = d.set({hour:23});
    
    //alert("selected date is from" + ad.format() + "to" + selectInfo.endStr);
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); 
  };

  anotherf =(selectInfo) =>{
    
    this.helperfunction(selectInfo);
    this.getTheDate (selectInfo);
    this.showModal();
  };

  getTheEmail = (selectInfo)=>{
    this.setState({
      theEventEmail: selectInfo.event.extendedProps.studentemail, 
      theEventID: selectInfo.event.extendedProps._id,
    });
  };
  showEmailModal = () => {
    this.setState({ 
      email_modal_show: true 
    });
  };

  allEmailFunction =(selectInfo) =>{

    this.getTheEmail(selectInfo);
    this.showEmailModal();
  };
}
