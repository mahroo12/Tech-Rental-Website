import React, {Component} from 'react';
import axios from 'axios';
import "./createStudent.css";
export default class CreateStudent extends Component {
  
    constructor(props) {
    super(props);

    this.onChangeStudentname = this.onChangeStudentname.bind(this);
    this.onChangeStudentid = this.onChangeStudentid.bind(this);
    this.onChangeStudentemail = this.onChangeStudentemail.bind(this);
    this.onChangecolor = this.onChangecolor.bind(this);
    this.onChangeStartdate = this.onChangeStartdate.bind(this);
    this.onChangeEnddate = this.onChangeEnddate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      studentid: '',
      studentemail: '',
      color: '',
      start: null,
      end: null,
      
      


    }
  }


  onChangeStudentname(e) {
    this.setState({
      title: e.target.value
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


  onSubmit(e) {
    e.preventDefault();
  

    const student = {
      title: this.state.title,
      studentid: this.state.studentid,
      studentemail: this.state.studentemail,
      color: this.state.color,
      start: this.props.location.params,
      end: this.props.location.param2
    }


    console.log(student);
    


    axios.post('http://localhost:5000/students/add', student)
      .then(res => console.log(res.data));
    
      

  }

  render() {
    return (
        
      <div >
        <h3 className= "heading1" >Student Information form</h3>
        <hr className= "line"/>
        
        <div className="main-pink-block" >
          
          <div className="form-block">
            <form onSubmit={this.onSubmit}>
              
              <div className="form-group"> 
                
                <label className= "full-name-label">Full Name: </label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeStudentname}
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
              </div>

              <div className="form-group"> 
               <label className="major-label">Major: </label>
                <input type="text"
                  
                  className="form-control"
                  value={this.state.color}
                  onChange={this.onChangecolor}
                  />
              </div>


              <div className="form-group"> 
                
                <label className= "start-date-label" >Start Date: </label>
                <div className="start-date-input">
                  <input value={this.props.location.params}/>
                </div>

              </div>

              <div className="form-group"> 
                
                <label className="end-date-label">End Date: </label>
                <div className="end-date-input" >
                  <input value={this.props.location.param2}/>
                </div>

              </div>
            
              <div className="form-group">
              <input style={{ marginTop: '160px', marginLeft: '30px', backgroundColor: '#545B9E'}} type="submit" value="Submit" className="btn btn-primary" />
              </div>

            </form>

          </div>

          <div>
          <div className="another-div" >
          </div>
          
          </div>
        </div>
      </div>
    )
  }
}


