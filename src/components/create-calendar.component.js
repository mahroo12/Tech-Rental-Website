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
      weekendsVisible: true,
      currentEvents: []
      
    };
    //this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

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
         
              <h1>{this.props.location.color_attribute}</h1>
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
                selectConstraint={{start: '2021-08-04'}}
                eventDurationEditable={false}
                defaultAllDay= {false}
                weekends={this.state.weekendsVisible}
                select=  {this.anotherf}//{this.handleDateSelect()}
            
              />
          </div>
          
              {this.state.show && <CalendarModal data={this.state}/>}
        </section>
    );
  }

  hideModal = () => {
    this.setState({ show: false });
  };

  getTheDate = (selectInfo) =>{
    this.setState({theDate: selectInfo.startStr, 
    theEndDate: selectInfo.endStr});
  };

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    });
  };

  anotherf =(selectInfo) =>{
    
    this.helperfunction(selectInfo);
    this.getTheDate (selectInfo);
   // this.handleDateSelect(selectInfo);
    this.showModal();
    
  //  this.moveToAnotherPage();
  };

  showModal = () => {
    this.setState({ 
      show: true 
    });
  };

  helperfunction = (selectInfo) =>{
    alert("selected date is from" + selectInfo.startStr + "to" + selectInfo.endStr);
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); 
  };

  moveToAnotherPage=()=>{
    window.location.href = "/schedule";
  };

  handleDateSelect = (selectInfo) => {
    
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
    
    if (title) {
    
    //<Redirect to="/schedule" />;
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  };
}
