import React, {Component} from 'react';
import axios from 'axios';
import "./createStudent.css";
import { Link} from "react-router-dom";
export default class CreateStudent extends Component {
  
    constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStudentid = this.onChangeStudentid.bind(this);
    this.onChangeStudentemail = this.onChangeStudentemail.bind(this);
    this.onChangeMajor = this.onChangeMajor.bind(this);
    this.onChangecolor = this.onChangecolor.bind(this);
    this.onChangeStartdate = this.onChangeStartdate.bind(this);
    this.onChangeEnddate = this.onChangeEnddate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      name: '',
      studentid: '',
      studentemail: '',
      major: '',
      color: null,
      start: null,
      end: null,
      emailError: "",
      
      


    }
  }


  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeStudentid(e) {
    this.setState({
        studentid: e.target.value
    });
  }
  
  onChangeStudentemail(e) {
    this.setState({
      studentemail: e.target.value
    });
  }

    onChangeMajor(e) {
      this.setState({
        major: e.target.value
      });
    }

    onChangecolor(e) {
        this.setState({
            color: e.target.value
            });
    }
    
    onChangeStartdate(date) {
        this.setState({
            start: date
                });
     } 
    
    onChangeEnddate(date) {
        this.setState({
            end: date
                });
     }            

     validate = () =>{
       let emailError = "";

       if (!this.state.studentemail.includes('@mail.mcgill.ca')){
         emailError = 'Invalid email';
       }

       if (emailError){
         this.setState({emailError});
         return false;
       }

       return true;
     };

  onSubmit(e) {
    e.preventDefault();
  
    const isValid = this.validate();

    if (isValid){
        
      const student = {
          title: this.state.title,
          name: this.state.name,
          studentid: this.state.studentid,
          studentemail: this.state.studentemail,
          major: this.state.major,
          color: this.props.location.param3,
          start: this.props.location.params,
          end: this.props.location.param2
        }


      console.log(student);
        


      axios.post('http://localhost:5000/students/add', student)
        .then(res => console.log(res.data));
        
      window.location.href = "/";
      }

      
  }

  
  render() {
    return (
        
      <div style={{paddingTop: '100px'}}>

        <h3 className= "heading1" >Student Information form</h3>
        <hr className= "line"/>
        <form onSubmit={this.onSubmit}>
        <div className="main-pink-block" >
          
          <div className="form-block">
            {/*<form onSubmit={this.onSubmit}>*/}
              
              <div className="form-group"> 
                
                <label className= "full-name-label">Title: </label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  />

              </div>
              
              <div className="form-group"> 
                
                <label className= "full-name-label">Name: </label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                  />

              </div>

              <div className="form-group"> 
              
                <label className= "student-id-label" >Student ID: </label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.studentid}
                  onChange={this.onChangeStudentid}
                  />
              </div>

              <div className="form-group"> 
                <label className= "email-label">Email: </label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.studentemail}
                  onChange={this.onChangeStudentemail}
                  />
                  <div style={{marginLeft: '34px', fontSize:15, color: 'red'}}>
                    {this.state.emailError}</div>
              </div>

              <div className="form-group"> 
                
                <label className= "full-name-label">Major: </label>
                <input type="text"
                  
                  className="form-control"
                  value={this.state.major}
                  onChange={this.onChangeMajor}
                  />

              </div>
              
            {/*
              <div className="form-group">
              <input style={{ marginTop: '160px', marginLeft: '30px', backgroundColor: '#545B9E'}} type="submit" value="Submit" className="btn btn-primary" />
            </div>*/}

           {/*</form>*/}

          </div>

          <div>
          <div className="another-div" >
            <h4 style={{textAlign: 'center', paddingTop: '30px',
                         color:'#545B9E'}}>Renting policies:</h4>
            <div className="rules_body" style={{ paddingLeft: '30px', paddingTop: '30px', textAlign: 'left', paddingRight: '30px'}}>
              <p style={{color: ' #0000006b'}}>Student may collect/return their computers anytime between 8 am to 5 pm on any of the weekdays from/to EUS office in McConnel Engineering Building. 
                Students must return the computer by the due date. 
                Failing to comply by these rules may result in penalties such as fines or being banned from renting 
                the computers again.
              </p>
            </div>
            <div className="form_buttons" style={{display: 'flex', justifyContent: 'center'}}>
            <div>
            <input style={{ marginTop: '160px', marginLeft: '30px', backgroundColor: '#545B9E'}} type="submit" value="Submit" className="btn btn-primary" />
            </div>
            <div>
            <Link to={{pathname: "/" }} className="btn btn-primary" style={{ marginLeft: '30px',marginTop: '160px',  backgroundColor: '#545B9E', border: 'none'}}>Cancel </Link>
              </div>
            </div>
          </div>
          
          </div>
        </div>
        </form>
      </div>
    )
  }
}


