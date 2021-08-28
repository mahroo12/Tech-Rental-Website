import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import CreateStudent from "./components/create-student.component";
import CreateSchedule from "./components/create-schedule.component";
import CreateCalendar from './components/create-calendar.component';
import CreateAbout from './components/create-about.component';
import Home from './components/home-page.component';


function App() {
  return (
    
    <Router>
      <body style={{backgroundColor: '#DBE0F2'}}>
      
        <Navbar />
        
        
        
        <Route path = "/" exact component= {Home}/>
        <Route path = "/student" component= {CreateStudent}/>
        <Route path = "/schedule" component= {CreateSchedule}/>
        <Route path = "/calendar" component= {CreateCalendar}/>
        <Route path = "/about" component= {CreateAbout}/>
      
      </body>
    </Router>
    
    
  );
}

export default App;
