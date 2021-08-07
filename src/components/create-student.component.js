import React, {Component} from 'react';
import axios from 'axios';

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
                  value={this.state.title}
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
                  value={this.state.color}
                  onChange={this.onChangecolor}
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
                <input value={this.props.location.param2}/>
                  
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


