import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';

export default class CreateStudent extends Component {
  
    constructor(props) {
    super(props);

    this.onChangeStudentname = this.onChangeStudentname.bind(this);
    this.onChangeStudentid = this.onChangeStudentid.bind(this);
    this.onChangeStudentemail = this.onChangeStudentemail.bind(this);
    this.onChangemajor = this.onChangemajor.bind(this);
    this.onChangeStartdate = this.onChangeStartdate.bind(this);
    this.onChangeEnddate = this.onChangeEnddate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      studentname: '',
      studentid: '',
      studentemail: '',
      major: '',
      startdate: null,
      enddate: null,
      


    }
  }

  onChangeStudentname(e) {
    this.setState({
      studentname: e.target.value
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

   
    onChangemajor(e) {
        this.setState({
            major: e.target.value
            });
    }
    
    onChangeStartdate(date) {
        this.setState({
            startdate: date
                });
     } 
    
    onChangeEnddate(date) {
        this.setState({
            enddate: date
                });
     }            

  onSubmit(e) {
    e.preventDefault();
  

    const student = {
      studentname: this.state.studentname,
      studentid: this.state.studentid,
      studentemail: this.state.studentemail,
      major: this.state.major,
      startdate: this.props.location.params,//this.state.startdate,
      enddate: this.state.enddate
    }


    console.log(student);

    axios.post('http://localhost:5000/students/add', student)
      .then(res => console.log(res.data));

      window.location = '/';

  }

  render() {
    return (
        
      <div >
        <h3 style= {{color:'#545B9E', fontSize:20, paddingLeft: '32px'}}>Student Information form</h3>
        <hr style={{color: '#9062DC50',height: 1}}/>
        
        <div className="main-pink-block" style={{display: 'flex', justifyContent: 'space-between'}}>
          
          <div className="form-block" style={{marginLeft: '30px',marginBottom: '30px', backgroundColor:'#FAFAFF', height:'500px', width:'550px', borderRadius: '5px'}}>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                
                <label style={{paddingLeft: '30px', color:'#00000060'}}>Full Name: </label>
                <input   style={{ marginLeft: '30px' , marginTop: '10px', marginBottom: '10px', width: '200px'}} type="text"
                  required
                  className="form-control"
                  value={this.state.studentname}
                  onChange={this.onChangeStudentname}
                  />
              </div>
              
              <div className="form-group"> 
              
                <label style={{paddingLeft: '30px', color:'#00000060'}}>Student ID: </label>
                <input   style={{ marginLeft: '30px' , marginTop: '10px', marginBottom: '10px', width: '200px'}} type="text"
                  required
                  className="form-control"
                  value={this.state.studentid}
                  onChange={this.onChangeStudentid}
                  />
              </div>

              <div className="form-group"> 
                <label style={{paddingLeft: '30px', color:'#00000060'}}>Email: </label>
                <input   style={{ marginLeft: '30px' , marginTop: '10px', marginBottom: '10px', width: '200px'}} type="text"
                  required
                  className="form-control"
                  value={this.state.studentemail}
                  onChange={this.onChangeStudentemail}
                  />
              </div>

              <div className="form-group"> 
               <label style={{paddingLeft: '30px', color:'#00000060'}}>Major: </label>
                <input style={{ marginLeft: '30px' , marginTop: '10px', marginBottom: '10px', width: '200px'}} type="text"
                  
                  className="form-control"
                  value={this.state.major}
                  onChange={this.onChangemajor}
                  />
              </div>
              <div className="form-group"> 
                <label style={{paddingLeft: '30px', color:'#00000060'}}>Start Date: </label>
                <div style={{paddingLeft: '30px', marginTop: '10px', marginBottom: '10px'}}>
                <input value={this.props.location.params}/>
                </div>
              </div>

              <div className="form-group"> 
                <label style={{paddingLeft: '30px', color:'#00000060'}}>End Date: </label>
                <div style={{paddingLeft: '30px', marginTop: '10px', marginBottom: '10px'}}>
                  <DatePicker
                  selected={this.state.enddate}
                  onChange={this.onChangeEnddate}
                  />
                </div>
              </div>
            
              <div className="form-group">
              <input style={{ marginTop: '160px', marginLeft: '30px', backgroundColor: '#545B9E'}} type="submit" value="Submit" className="btn btn-primary" />
          </div>

            </form>
          </div>

          <div>
          <div className="another-div" style={{backgroundColor:'#FAFAFF', height:'300px', width:'450px', marginRight: '30px', borderRadius: '5px'}}>
          </div>
          
          </div>
        </div>
      </div>
    )
  }
}


