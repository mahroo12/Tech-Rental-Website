//import React from "react";
import React, {Component} from 'react';

import axios from 'axios';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarModal from "./calendarModal.component";


export default class CreateCalendar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      theDate: null,
      theEndDate: null,
      theColor: null,
      weekendsVisible: true,
      currentEvents: []
      
    };
    //this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.displayEventInfo = this.displayEventInfo.bind(this);

  }
 
  
  componentDidMount() {
      axios.get('http://localhost:5000/students/')
        .then(response =>  this.setState({currentEvents: response.data}));

        console.log(this.state.currentEvents);
        
        
        
  }
  

  render() {
    return (
      
        <section style={{ backgroundColor: 	'#FFFFFF'}}>
          <div className="cl" style={{padding: '20px', position: 'relative', zIndex: 0}}>
              {console.log('the value is')}
              {console.log(this.state.currentEvents)} 
         
              <FullCalendar
          
                plugins={[dayGridPlugin, interactionPlugin]}
                headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth"
                }}
            
                initialView="dayGridMonth"
                editable={false}
                selectable={true}
                selectOverlap={false}
                
                events=  {this.state.currentEvents}
                eventClick= {this.displayEventInfo}
                selectConstraint={{start: '2021-08-04'}}
                eventDurationEditable={false}
                defaultAllDay= {false}
                weekends={this.state.weekendsVisible}
                select=  {this.anotherf}
            
              />
          </div>
          
              {this.state.show && <CalendarModal data={this.state}/>}
        </section>
    );
  }

  showModal = () => {
    this.setState({ 
      show: true 
    });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  getTheDate = (selectInfo) =>{
    this.setState({
      theDate: selectInfo.startStr, 
      theEndDate: selectInfo.endStr,
      theColor: this.props.location.color_attribute
    });
  };

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
  };

  helperfunction = (selectInfo) =>{
    alert("selected date is from" + selectInfo.startStr + "to" + selectInfo.endStr + "and" + this.props.location.color_attribute);
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); 
  };

  anotherf =(selectInfo) =>{
    
    this.helperfunction(selectInfo);
    this.getTheDate (selectInfo);
    this.showModal();
  };
}
