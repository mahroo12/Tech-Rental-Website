//import React from "react";
import React, {Component} from 'react';
import axios from 'axios';
import moment from "moment";
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
      currentEvents: [],
      arr: []
    };
    //this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

  }
 
  componentDidMount() {
      axios.get('http://localhost:5000/students/')
        .then(response =>  this.setState({currentEvents: response.data}));

        console.log(this.state.currentEvents);
        
        
        
  }
  hideModal = () => {
    this.setState({ show: false });
  };
  getTheDate = (selectInfo) =>{
    this.setState({theDate: selectInfo.startStr, 
    theEndDate: selectInfo.endStr});
  };

  render() {
    return (
      
        <div style={{backgroundColor: 	'#FFFFFF'}}>
      <div className="demo-app">
        <div className="demo-app-main">
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
            events={this.state.currentEvents}
            eventDurationEditable={false}
            weekends={this.state.weekendsVisible}
            select=  {this.anotherf}//{this.handleDateSelect()}
            
          />
          
           {this.state.show && <CalendarModal data={this.state}/>}
          
        </div>
      </div>
      </div>
    );
  }



  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    });
  };
  anotherf =(selectInfo) =>{
    //preventDefault();
    this.helperfunction(selectInfo);
    this.getTheDate (selectInfo);
    this.handleDateSelect(selectInfo);
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
  };

  moveToAnotherPage=()=>{
    window.location.href = "/schedule";
  };

  handleDateSelect = (selectInfo) => {
    //try to form a form here and use the information as input
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;
    //let history = useHistory();
    calendarApi.unselect(); // clear date selection
    
    if (title) {
    
    //<Redirect to="/schedule" />;
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
      
      
      //setTimeout(this.props.history.push('/schedule'), 5000);
      //window.location.href = "/schedule";
     
    
    }
    //alert("selected date is from" + selectInfo.startStr + "to" + selectInfo.endStr);
  };
}
