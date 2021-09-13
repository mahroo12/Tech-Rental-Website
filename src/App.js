import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import CreateStudent from "./components/create-student.component";
import CreateSchedule from "./components/create-schedule.component";
import CreateCalendar from './components/create-calendar.component';
import CreateAbout from './components/create-about.component';
import Home from './components/home-page.component';
import Login from './components/create-login.component';
import StudentList from './components/mongodb-table-info.component';
import { useState } from 'react';


function App() {

  const [ user, setLoginUser] = useState({})
  return (
    
    <Router>
      <body style={{backgroundColor: '#DBE0F2'}}>
      
        <Navbar />
        
        
        
        <Route path = "/" exact component= {Home}/>
        <Route path = "/student" component= {CreateStudent}/>
        <Route path = "/schedule" component= {CreateSchedule}/>
        <Route path = "/calendar" component= {CreateCalendar}/>
        <Route path = "/about" component= {CreateAbout}/>
        <Route path = "/login"><Login setLoginUser={setLoginUser}/></Route> 
        <Route exact path="/mongodbtable">
            {
              user && user._id ? <StudentList /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
      
      </body>
    </Router>
    
    
  );
}

export default App;
